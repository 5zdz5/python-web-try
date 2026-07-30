import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PatrolButton from './components/PatrolButton'
import Home from './pages/Home'
import LevelMap from './pages/LevelMap'
import LevelDetail from './pages/LevelDetail'
import LearningPath from './pages/LearningPath'
import Achievements from './pages/Achievements'
import Leaderboard from './pages/Leaderboard'
import SourceExplorer from './pages/SourceExplorer'
import MonitorDashboard from './pages/MonitorDashboard/MonitorDashboard'
import NibbleLevels from './pages/NibbleLevels'
import SkillLab from './pages/SkillLab'
import EvolutionArchive from './pages/EvolutionArchive'
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
          <Route path="/monitor" element={<MonitorDashboard />} />
          <Route path="/nibble" element={<NibbleLevels />} />
          <Route path="/skills" element={<SkillLab />} />
          <Route path="/evolution" element={<EvolutionArchive />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <PatrolButton />
    </div>
  )
}

export default App
