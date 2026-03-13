import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import StartFree from './components/Startfree'

function App() {
  return (
    <div>
      <div>
      <Navbar />
      <Hero/>
      <Features/>
      <Pricing/>
      <FAQ/>
      <StartFree/>
    </div>
    </div>
  )
}

export default App