import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueDeRemboursement from './pages/PolitiqueDeRemboursement'
import ConditionsGenerales from './pages/ConditionsGenerales'

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain-overlay">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-remboursement" element={<PolitiqueDeRemboursement />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
