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
import CodeTypingArena from './pages/CodeTypingArena'
import PluginsHub from './pages/PluginsHub'
import ImageGen from './pages/ImageGen'
import VideoGen from './pages/VideoGen'
import VizLab from './pages/VizLab'
import Workbench from './pages/Workbench'
import ProductDocs from './pages/ProductDocs'
import GitHubHub from './pages/GitHubHub'
import LarkSuite from './pages/LarkSuite'
import DesignStudio from './pages/DesignStudio'
import BrowserStudio from './pages/BrowserStudio'
import WebDevTools from './pages/WebDevTools'
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
          <Route path="/typing" element={<CodeTypingArena />} />
          {/* 插件中心 */}
          <Route path="/plugins" element={<PluginsHub />} />
          <Route path="/plugins/image-gen" element={<ImageGen />} />
          <Route path="/plugins/video-gen" element={<VideoGen />} />
          <Route path="/plugins/viz-lab" element={<VizLab />} />
          <Route path="/plugins/workbench" element={<Workbench />} />
          <Route path="/plugins/product-docs" element={<ProductDocs />} />
          <Route path="/plugins/github-hub" element={<GitHubHub />} />
          <Route path="/plugins/lark-suite" element={<LarkSuite />} />
          <Route path="/plugins/design-studio" element={<DesignStudio />} />
          <Route path="/plugins/browser-studio" element={<BrowserStudio />} />
          <Route path="/plugins/web-dev" element={<WebDevTools />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <PatrolButton />
    </div>
  )
}

export default App
