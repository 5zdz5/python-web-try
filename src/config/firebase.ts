import { initializeApp } from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, enableIndexedDbPersistence } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
}

const hasConfig = firebaseConfig.apiKey && firebaseConfig.projectId

export const app = hasConfig ? initializeApp(firebaseConfig) : null
export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
export const githubProvider = auth ? new GithubAuthProvider() : null

if (auth && githubProvider) {
  githubProvider.addScope('read:user')
  githubProvider.setCustomParameters({ allow_signup: 'true' })
}

if (db && typeof window !== 'undefined') {
  try {
    enableIndexedDbPersistence(db).catch(() => {})
  } catch {}
}

export function isFirebaseEnabled() {
  return hasConfig && !!auth && !!db
}

export function signInWithGithub(): Promise<User | null> {
  if (!auth || !githubProvider) return Promise.resolve(null)
  return signInWithPopup(auth, githubProvider).then(result => result.user)
}

export function logOut(): Promise<void> {
  if (!auth) return Promise.resolve()
  return signOut(auth)
}

export function onAuthChanged(callback: (user: User | null) => void) {
  if (!auth) {
    callback(null)
    return () => {}
  }
  return onAuthStateChanged(auth, callback)
}

export async function saveUserProgress(userId: string, progress: object) {
  if (!db || !userId) return
  await setDoc(doc(db, 'userProgress', userId), {
    progress,
    updatedAt: new Date().toISOString()
  }, { merge: true })
}

export async function loadUserProgress(userId: string): Promise<object | null> {
  if (!db || !userId) return null
  const snap = await getDoc(doc(db, 'userProgress', userId))
  if (snap.exists()) {
    return snap.data().progress || null
  }
  return null
}
