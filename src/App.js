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
  3. Tabellarischer LL unter "zur Person" V
  4. Text: "Einladung zum Klötzchen-Spiel" 
  5. Bilderliste für Infoseiten vorbereiten (GDocs). V

  BONUS FEATURES
  1. 
  3. smooth color transitions on menu toggle!
  4. smooth color transitions on image load!

  BUGS
  1. "Dummies" 'fangen' Mauscursor!
  2. Runner.stop() stoppt den Runner nicht!


  ⚠️ {{...style.bioItem, ...style.bioItemSubList}} DATS HOW you combine styles!



*/




// Pages
import Home from './pages/home'
import Login from './pages/login'
import Impressum from './pages/impressum'
import Menu from './components/menu'
import Artist from './pages/artist'
import Bilderwand from './pages/bilderwand'
import Kontakt from './pages/kontakt'

import oelsand1 from './assets/oelsand-1.jpg'
import oelsand2 from './assets/oelsand-2.jpg'
import oelsand3 from './assets/oelsand-3.jpg'
import oelsand4 from './assets/oelsand-4.jpg'
import oelsand5 from './assets/oelsand-5.jpg'

import kfu1 from './assets/kfu-1.jpg'
import kfu2 from './assets/kfu-2.jpg'
import kfu3 from './assets/kfu-3.jpg'
import kfu4 from './assets/kfu-4.jpg'
import kfu5 from './assets/kfu-5.jpg'
import kfu6 from './assets/kfu-6.jpg'
import kfu7 from './assets/kfu-7.jpg'

import upcycling1 from './assets/objekt-11.jpg'
import upcycling2 from './assets/objekt-2.jpg'
import upcycling3 from './assets/objekt-3.jpg'
import upcycling4 from './assets/objekt-4.jpg'
import upcycling5 from './assets/objekt-5.jpg'

import leute1 from './assets/leute-1.jpg'
import leute2 from './assets/leute-2.jpg'
import leute3 from './assets/leute-3.jpg'
import leute4 from './assets/leute-4.jpg'
import leute5 from './assets/leute-5.jpg'
import leute6 from './assets/leute-6.jpg'
import leute7 from './assets/leute-7.jpg'
import leute8 from './assets/leute-8.jpg'

import portrait1 from './assets/portrait-1.jpg'
import portrait2 from './assets/portrait-2.jpg'
import portrait3 from './assets/portrait-3.jpg'
import portrait4 from './assets/portrait-4.jpg'
import portrait5 from './assets/portrait-5.jpg'
import portrait6 from './assets/portrait-6.jpg'
import portrait7 from './assets/portrait-7.jpg'

import eyecandy1 from './assets/eyecandy-1.jpg'
import eyecandy2 from './assets/eyecandy-2.jpg'
import eyecandy3 from './assets/eyecandy-3.jpg'
import eyecandy4 from './assets/eyecandy-4.jpg'
import eyecandy5 from './assets/eyecandy-5.jpg'
import eyecandy6 from './assets/eyecandy-6.jpg'
import eyecandy7 from './assets/eyecandy-7.jpg'


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
    upcycling: {
      infosSerie: '',
      bilder: [
        {
          key:0,
          id:0,
          titel:'Abgelaufen',
          source:upcycling1,altSrc: ['filename2','filename3'],
          preis:'unverkäuflich',verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:{x:0,y:0,z:0},
          beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:1,
          id:1,
          titel:'Sonnenbader',
          source:upcycling2,altSrc: ['filename2','filename3'],
          preis:'unverkäuflich',verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:{x:0,y:0,z:0},
          beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:2,
          id:2,
          titel:'Kontaktaufnahme',
          source:upcycling3,altSrc: ['filename2','filename3'],
          preis:'unverkäuflich',verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:{x:0,y:0,z:0},
          beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:3,
          id:3,
          titel:'ungleiches Paar',
          source:upcycling4,altSrc: ['filename2','filename3'],
          preis:'unverkäuflich',verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:{x:0,y:0,z:0},
          beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:4,
          id:4,
          titel:'ungleiches Paar',
          source:upcycling5,altSrc: ['filename2','filename3'],
          preis:'unverkäuflich',verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:{x:0,y:0,z:0},
          beschreibung: 'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        }
      ]
    },
    kfu: {
      infosSerie:'Mit einem breiten Kalligraphiepinsel sind diese großformatigen Aquarelle entstanden.',
      bilder:[
        {
          key:5,
          id:0,
          titel:'Flugobjekt 1',
          source:kfu1,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:6,
          id:1,
          titel:'Flugobjekt 2',
          source:kfu2,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:7,
          id:2,
          titel:'Flugobjekt 3',
          source:kfu3,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:8,
          id:3,
          titel:'Flugobjekt 4',
          source:kfu4,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:9,
          id:4,
          titel:'Flugobjekt 5',
          source:kfu5,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:10,
          id:5,
          titel:'Flugobjekt 6',
          source:kfu6,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:11,
          id:6,
          titel:'Flugobjekt 6',
          source:kfu7,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: '',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        }
      ]
    },
    leute: {
      infosSerie: 'Zufällige Begegnungen und Alltagssituationen in Acryl auf Leinwand gebannt.',
      bilder:[
        {
          key:12,
          id:0,
          titel:'Social Experiment 1',
          source:leute1,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:13,
          id:1,
          titel:'Social Experiment 1',
          source:leute2,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:14,
          id:2,
          titel:'Social Experiment 1',
          source:leute3,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:15,
          id:3,
          titel:'Social Experiment 1',
          source:leute4,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:16,
          id:4,
          titel:'Social Experiment 1',
          source:leute5,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:17,
          id:5,
          titel:'Social Experiment 1',
          source:leute6,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:18,
          id:6,
          titel:'Social Experiment 1',
          source:leute7,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:19,
          id:7,
          titel:'Social Experiment 1',
          source:leute8,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein paar Leute',
          schatten:true
        }
      ]
    },
    portraits: {
      infosSerie: 'Grundlage der Serie "Portraits" sind Fotos, die erst digital bearbeitet wurden und dann auf der Leinwand noch einmal analog.',
      bilder:[
        {
          key:20,
          id:0,
          titel:'Selfie',
          source:portrait1,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'zwei tolle Frauen',
          schatten:true
        },
        {
          key:21,
          id:1,
          titel:'Profilbild',
          source:portrait2,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'Das langjährige Profilbild des Entwicklers dieser Webseite',
          schatten:true
        },
        {
          key:22,
          id:2,
          titel:'Playing the Blues',
          source:portrait3,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein Arzt und Gitarrist',
          schatten:true
        },
        {
          key:23,
          id:3,
          titel:'Abgetaucht',
          source:portrait4,
          altSrc:['filename2','filename3'],
          preis:0, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'ein Herr mit Brille',
          schatten:true
        },
        {
          key:24,
          id:4,
          titel:'S.',
          source:portrait5,
          altSrc:['filename2','filename3'],
          preis:600, verkauft:false, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'eine dunkelhaarige Dame mit blumiger Bluse',
          schatten:true
        },
        {
          key:25,
          id:5,
          titel:'H.D.',
          source:portrait6,
          altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'eine dunkelhaarige Dame mit blumiger Bluse',
          schatten:true
        },
        {
          key:26,
          id:6,
          titel:'?',
          source:portrait7,
          altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:{x:0,y:0,z:0}, 
          beschreibung: '',
          altTxt:'eine dunkelhaarige Dame mit blumiger Bluse',
          schatten:true
        }
      ]
    },
    eyecandy: {
      infosSerie:'Süßigkeiten, stark herangezoomt.',
      bilder: [
        {
          key:28,
          id:0,
          titel:'Sweets Nr. 7',
          source:eyecandy1,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:30,y:30,z:3},
          beschreibung:'Acryl auf LW',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:29,
          id:1,
          titel:'Eye Candy 1',
          source:eyecandy2,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:30,
          id:2,
          titel:'Eye Candy 1',
          source:eyecandy3,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:31,
          id:3,
          titel:'Eye Candy 1',
          source:eyecandy4,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:32,
          id:4,
          titel:'Eye Candy 1',
          source:eyecandy5,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:33,
          id:5,
          titel:'Eye Candy 1',
          source:eyecandy6,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:34,
          id:6,
          titel:'Eye Candy 1',
          source:eyecandy7,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['ernährung','acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        }
      ]
    },
    oelsand: {
      infosSerie:'dsgsdgdfg',
      bilder:[
        {
          key:35,
          id:0,
          titel:'Ölsand 1',
          source:oelsand1,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['öl','malerei','spachtelmasse','abstrakt','organisch'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'',
          altTxt:"",
          schatten:false
        },
        {
          key:36,
          id:1,
          titel:'Weserschlick 1',
          source:oelsand2,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','abstrakt','organisch'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false
        },
        {
          key:37,
          id:2,
          titel:'Weserschlick 2',
          source:oelsand3,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','schlicksand','abstrakt','organisch'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false
        },
        {
          key:38,
          id:3,
          titel:'Weserschlick 3',
          source:oelsand4,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','abstrakt','organisch'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false
        },
        {
          key:39,
          id:4,
          titel:'Ölsand 5',
          source:oelsand5,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['öl','malerei','spachtelmasse','abstrakt','organisch'], 
          gewicht:0, groesse:{x:50,y:100,z:4},
          beschreibung:'Die Formen und Farben des bekannten Naschzeugs dienten als Inspiration für ein bedrohliches Muster. Ein Minenfeld präzise ausgebreiteter kleiner Zuckerbomben, dass hervorragend in eine Hipsterwohnung passt.',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false  
        }
      ]
    }
  }

  return (
    <Provider value={{ bilder, screen_size, aktive_objekte, matter }}>
      <React.Fragment>
        <Router>
          <Menu /> 
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/bilder/kfu' element={<Bilderwand key='0' bilder={bilder.kfu.bilder} titel='Herbstliche Flugobjekte' />} />
              <Route exact path='/bilder/oelsand' element={<Bilderwand key='1' bilder={bilder.oelsand.bilder} titel='Ölsand' />} />
              <Route exact path='/bilder/upcycling' element={<Bilderwand key='2' bilder={bilder.upcycling.bilder} titel='Upcycling' />} />
              <Route exact path='/bilder/zufallsbegegnungen' element={<Bilderwand key='3' bilder={bilder.leute.bilder} titel='Zufallsbegegnungen' />} />
              <Route exact path='/bilder/portraits' element={<Bilderwand key='4' bilder={bilder.portraits.bilder} titel='Portraits' />} />
              <Route exact path='/bilder/suesses' element={<Bilderwand key='5' bilder={bilder.eyecandy.bilder} titel='Sweets' />} />
              <Route exact path='/impressum' element={<Impressum />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/kuenstlerin' element={<Artist />} />
              <Route exact path='/kontakt' element={<Kontakt />} />
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

