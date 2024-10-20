import Apps from "./components/apps"
import Clients from "./components/clients"
import Customise from "./components/cutomise"
import Data from "./components/data"
import Extension from "./components/extension"
import Feature from "./components/feature"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Plan from "./components/plan"
import Sponsor from "./components/sponsor"
import Try from "./components/try"
import Work from "./components/work"


function App() {
  

  return (
    <main>
      <Navbar />
      <Hero />
      <Feature/>
      <Extension/>
      <Customise/>
      <Plan/>
      <Work/>
      <Data/>
      <Sponsor/>
      <Apps/>
      <Clients/>
      <Try/>
      <Footer/>
    </main>
  )
}

export default App
