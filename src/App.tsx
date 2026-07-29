import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LevelMap from './pages/LevelMap'
import LevelDetail from './pages/LevelDetail'
import LearningPath from './pages/LearningPath'
import Achievements from './pages/Achievements'
import Leaderboard from './pages/Leaderboard'
import SourceExplorer from './pages/SourceExplorer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<LevelMap />} />
          <Route path="/level/:id" element={<LevelDetail />} />
          <Route path="/path" element={<LearningPath />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/source" element={<SourceExplorer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
