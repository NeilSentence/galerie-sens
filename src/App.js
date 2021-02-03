import React, {useState} from 'react'
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


/* TODOS:

  COMPLETION 
  1. Menu auto drop nur bei Home! 
  2. Home = Menu schon offen, delay Text ("delayed_fallables") länger.
  3. Tabellarischer LL unter "zur Person"
  4. Text: "Einladung zum Klötzchen-Spiel"
  5. Bilderliste für Infoseiten vorbereiten (GDocs).

  BONUS FEATURES
  1. 
  3. smooth color transitions on menu toggle!
  4. smooth color transitions on image load!

  BUGS
  1. "Dummies" 'fangen' Mauscursor!
  2. Runner.stop() stoppt den Runner nicht!



*/




// Pages
import Home from './pages/home'
import Login from './pages/login'
import Impressum from './pages/impressum'
import Menu from './components/menu'
import Artist from './pages/artist'
import Bilderwand from './pages/bilderwand'

import aquarell1 from './assets/hfu-3.jpg'
import objekt1 from './assets/objekt-11.jpg'
import objekt2 from './assets/objekt-2.jpg'
import objekt3 from './assets/objekt-3.jpg'
import acrylic1 from './assets/acrylic-1.jpg'
import eyecandy1 from './assets/eyecandy-1.jpg'


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
    objekt:[
      {
        id:0,
        titel:'Abgelaufen',
        source:objekt1,altSrc: ['filename2','filename3'],
        preis:'unverkäuflich',verkauft:false,
        tags:['objekt','abstrakt','metall','industrial','upcycling'],
        gewicht:0, groesse:{x:0,y:0,z:0},
        beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
        altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
        schatten:false
      },
      {
        id:1,
        titel:'Sonnenbader',
        source:objekt2,altSrc: ['filename2','filename3'],
        preis:'unverkäuflich',verkauft:false,
        tags:['objekt','abstrakt','metall','industrial','upcycling'],
        gewicht:0, groesse:{x:0,y:0,z:0},
        beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
        altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
        schatten:false
      },
      {
        id:2,
        titel:'Kontaktaufnahme',
        source:objekt3,altSrc: ['filename2','filename3'],
        preis:'unverkäuflich',verkauft:false,
        tags:['objekt','abstrakt','metall','industrial','upcycling'],
        gewicht:0, groesse:{x:0,y:0,z:0},
        beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
        altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
        schatten:false
      },

    ],
    aquarell:[
      {
        id:0,
        titel:'Herbstliches Flugobjekt 1',
        source:aquarell1,altSrc:['filename2','filename3'],
        preis:500, verkauft:false, 
        tags:['malerei','aquarell','abstrakt','experimentell'],
        gewicht:0, groesse:{x:25,y:30,z:3},
        beschreibung: '',
        altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
        schatten:true
      }
    ],
    acryl:[
      {
        id:0,
        titel:'Social Experiment 1',
        source:acrylic1,
        altSrc:['filename2','filename3'],
        preis:0, verkauft:false, 
        tags:[], 
        gewicht:0, groesse:{x:0,y:0,z:0}, 
        beschreibung: '',
        altTxt:'ein paar Leute',
        schatten:true
      }
    ],
    eyecandy:[
      {
        id:0,
        titel:'Eye Candy 1',
        source:eyecandy1,altSrc:['filename2','filename3'],
        preis:0, verkauft:false, 
        tags:['ernährung','acryl','malerei','gegenständlich','muster'], 
        gewicht:0, groesse:{x:50,y:100,z:4},
        beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
        altTxt:'ein regelmäßiges Muster aus Haribos',
        schatten:true
      }
    ]
  }

  return (
    <Provider value={{ bilder, screen_size, aktive_objekte, matter }}>
      <React.Fragment>
        <Router>
          <Menu /> 
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/bilder/aquarelle' element={<Bilderwand key='1' bilder={bilder.aquarell} titel='Aquarelle' beschreibung='Experimente mit Wasser und Farbe' />} />
              <Route exact path='/bilder/objekte' element={<Bilderwand key='2' bilder={bilder.objekt} titel='Objektkunst' beschreibung='Recyceltes aus dem frühen Industriezeitalter' />} />
              <Route exact path='/bilder/acryl' element={<Bilderwand key='3' bilder={bilder.acryl} titel='Acrylmalerei' beschreibung='Kunststoffdispersionismus' />} />
              <Route exact path='/bilder/suesses' element={<Bilderwand key='4' bilder={bilder.eyecandy} titel='Sweets' beschreibung='Süßes und Saures in bunter Mischung' />} />
              <Route exact path='/impressum' element={<Impressum />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/kuenstlerin' element={<Artist />} />
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    </Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

