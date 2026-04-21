import './index.css'
import { ThemeProvider } from './ThemeContext'
import Ticker from './components/Ticker'
import Nav from './components/Nav'
import Hero from './components/Hero'
import JustificationGenerator from './components/JustificationGenerator'
import HallOfShame from './components/HallOfShame'
import DesignerBingo from './components/DesignerBingo'
import FigmaVsReality from './components/FigmaVsReality'
import DayInLife from './components/DayInLife'
import ColorCrimeScene from './components/ColorCrimeScene'
import CSSGallery from './components/CSSGallery'
import LovableRoast from './components/LovableRoast'
import ThingsDesignersThinkAreHard from './components/ThingsDesignersThinkAreHard'
import CanADevDoThis from './components/CanADevDoThis'
import OverpricedAudit from './components/OverpricedAudit'
import Manifesto from './components/Manifesto'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      {/* Noise overlay */}
      <div className="noise" />

      {/* Fixed top ticker — sits at z-200, nav sits below it at top:28px */}
      <Ticker />

      <Nav />

      <main>
        <Hero />
        <JustificationGenerator />
        <HallOfShame />
        <DesignerBingo />
        <FigmaVsReality />
        <DayInLife />
        <ColorCrimeScene />
        <CSSGallery />
        <LovableRoast />
        <ThingsDesignersThinkAreHard />
        <CanADevDoThis />
        <OverpricedAudit />
        <Manifesto />
      </main>

      <Footer />
    </ThemeProvider>
  )
}

export default App
