import React, {Component, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Matter from 'matter-js'

//import WidthDisplay from './components/utils/widthdisplay'

// GDPR 
/*import GDPR from 'react-gdpr-consent'

const config = [
      { id: 'age', text: "I'm 18 years old or older", checked: true, locked: true },
      { id: 'terms', text: "I accept", checked: true, locked: true, link: "http://www.example.com/terms.html", linkText: "terms & conditions"},
      { id: 'privacy', text: "I accept", checked: true, locked: true, link: "http://www.example.com/privacy.html", linkText: "Privacy & policy" },
      { id: 'newsletter', text: "I want to receive newsletters and updates by email", checked: false, locked: false }
]

const linkHandler = (link) => {
  window.open(link, '_blank')
}
const toggleHandler = (id, value) => {
  console.log(id, value)
}

dann unten im render:
<GDPR config={config} toggleHandler={toggleHandler} linkHandler={linkHandler}/>

*/

// Pages
import Home from './pages/home'
import Login from './pages/login'
import Impressum from './pages/impressum'
import Menu from './components/menu'
import Artist from './pages/artist'
import Bilderwand from './pages/bilderwand'

let world, engine, runner

const { Runner, World, Bodies, MouseConstraint, Composites, Body } = Matter

const { Provider, Consumer } = React.createContext()


// Das Update Loop muss zuerst gucken, was drin ist.
// Verschiedene Click- und Navigate-Events haben darauf Einfluss
 

const logikAktiveObjekte = () => {
  // Vergleich aktuelleAktiveObjekte mit neu reinkommenden
  // wenn neue dabei, zu World & Liste "aktiveObjekte" hinzufügen
}




const loopableStep = (aktiveObjekte) => {
  
}


const App = () => {

  const screen_size = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  // ------------------------------------------------------//

  // Liste von HTML-Elementen (DOM Nodes), die momentan herunterfallen sollen.

  // Wird etwas aus dieser Liste entfernt, erhält es vom Update Loop keine CSS-Positionen
  // außerdem wird es aus der World genommen.

  // Kommt etwas neu hinzu, wird es zur World hinzugefügt, außerdem erhält es im Loop Werte

  // bleibt etwas bestehen, erhält es nur Werte.

  const aktive_objekte = useState([]) // "fallables"

  // -------------------------------------------------------//


  const matter = useState(Matter)


  const bilder = {
    objekte:'',
    aquarell:'',
    acryl:'',
    suesses:''
  }
  
  return (
    <Provider value={bilder,screen_size,aktive_objekte,matter}>
      <React.Fragment>
        <div style={{background:"white"}}>
          <Router>
            <Menu /> 
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/bilder/aquarelle' element={<Bilderwand key='1' titel={'Aquarelle'} beschreibung='Experimente mit Wasser und Farbe' tag={'aquarell'} bilder={bilder.aquarell} />} />
                <Route exact path='/bilder/objekte' element={<Bilderwand key='2' titel={'Objektkunst'} beschreibung='Recyceltes aus dem frühen Industriezeitalter' tag={'objekt'} bilder={bilder.objekte} />} />
                <Route exact path='/bilder/acryl' element={<Bilderwand key='3' titel={'Acrylmalerei'} beschreibung='Kunststoffdispersionismus' tag={'acryl'} bilder={bilder.acryl} />} />
                <Route exact path='/bilder/suesses' element={<Bilderwand key='4' titel={'Süßstoff'} beschreibung='Süßes und Saures in bunter Mischung' tag={'suesses'} bilder={bilder.suesses} />} />
                <Route exact path='/impressum' element={<Impressum />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/kuenstlerin' element={<Artist />} />
              </Routes>
            </div>
          </Router>
        </div>
      </React.Fragment>
    </Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;