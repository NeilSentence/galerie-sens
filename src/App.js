import React, {useState} from 'react'
import './App.css'
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom"
import Matter from 'matter-js'



// ANATOMIE !!!!!!




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
  1. Menu auto drop nur bei Home! ✔️
  2. Home = Menu schon offen, delay Text ("delayed_fallables") länger. 
  3. Tabellarischer LL Ok aber Text (Zufall, Fundstücke, Computer als Werkzeug der Verfremdung) "zur Person"
  4. Text: "Einladung zum Klötzchen-Spiel" 
  5. Anmerkungen zur Serie wie Einzelansicht, weißer Balken oben
  6. Kontaktformular einbauen
  7. Glitch Art, Fotocollagen 

  BONUS FEATURES
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
import KontaktDisclaimer from './pages/kontaktDisclaimer'

import glitches0 from './assets/error.gif'
import glitches1 from './assets/error-1.jpg'
import glitches2 from './assets/error-2.jpg'
import glitches3 from './assets/error-3.jpg'
import glitches4 from './assets/error-4.jpg'
import glitches5 from './assets/error-5.jpg'
import glitches6 from './assets/error-6.jpg'
import glitches7 from './assets/error-7.jpg'
import glitches8 from './assets/error-8.jpg'


import collage1 from './assets/collagen-1.jpg'
import collage2 from './assets/collagen-2.jpg'
import collage3 from './assets/collagen-3.jpg'
import collage4 from './assets/collagen-4.jpg'
import collage5 from './assets/collagen-5.jpg'
import collage6 from './assets/collagen-6.jpg'
import collage7 from './assets/collagen-7.jpg'

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
import kfu8 from './assets/kfu-8.jpg'

import upcycling1 from './assets/objekt-11.jpg'
import upcycling2 from './assets/objekt-2.jpg'
import upcycling3 from './assets/objekt-3.jpg'
import upcycling4 from './assets/objekt-4.jpg'
import upcycling5 from './assets/objekt-5.jpg'
import upcycling6 from './assets/objekt-6.jpg'

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

  //------------------------------------------------------//

  // Liste von HTML-Elementen (DOM Nodes), die momentan herunterfallen sollen.

  // Wird etwas aus dieser Liste entfernt, erhält es vom Update Loop keine CSS-Positionen
  // außerdem wird es aus der World genommen.

  // Kommt etwas neu hinzu, wird es zur World hinzugefügt, außerdem erhält es im Loop Werte

  // bleibt etwas bestehen, erhält es nur Werte.

  const aktive_objekte = useState([]) // "fallables"

  // -------------------------------------------------------//

  const matter = useState(Matter)

  const bilder = {
    fotocollagen: {
      infosSerie:'Basierend auf Fotografien banaler Alltagsgegenstände hat die Künstlerin durch Vervielfältigung, Drehung und Rekombination aus konkreten Bildgegenständen (Kopieren-Einfügen) abstrakte Muster erzeugt. Das Bild wird zum Bildelement / -Bestandteil. Diese Muster sind allerdings nicht "geometrisch-starr" sondern leicht versetzt, so dass Regelmäßigkeit aufgelöst wird und Lebendigkeit entsteht.',
      entstanden:'ca. 2013-2014',
      bilder:[
        {
          key:0,
          id:0,
          titel:'Fachwerk',
          source:collage1,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        },
        {
          key:1,
          id:1,
          titel:'Fenster',
          source:collage2,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        },
        {
          key:2,
          id:2,
          titel:'Kissen',
          source:collage3,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        },{
          key:3,
          id:3,
          titel:'Selbstportrait',
          source:collage4,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        },
        {
          key:4,
          id:4,
          titel:'Eisenkette',
          source:collage5,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        },
        {
          key:5,
          id:5,
          titel:'Kühe',
          source:collage6,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        },
        {
          key:56,
          id:6,
          titel:'Schattenzaun',
          source:collage7,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['fotografie','digital','collage'],
          gewicht:0, groesse:{x:'?',y:'?',z:'?'},
          beschreibung: 'Collage aus digitalen Fotos.',
          altTxt:'Ein musterhaftes Bild das aus einzelnen Fotos zusammengesetzt ist.',
          schatten:true
        }
      ]
    },
    anatomie: {
      infosSerie: 'Kleinformate aus stark verdünnter, oder verdickter Farbmischung. Dadurch entstehen quasi körperhafte Formen.',
      entstanden:'ca. 2014',
      bilder: []
    },
    upcycling: {
      infosSerie: 'Fundstücken vom Schrottplatz wurde hier eine neue Seele eingehaucht. Sie ergeben eine Serie, die menschliche Interaktion zum Thema hat.',
      entstanden:'ca. 2016 / 2017',
      bilder: [
        {
          key:6,
          id:0,
          titel:'Redezeit abgelaufen',
          source:upcycling1,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:{x:50,y:'?',z:40},
          beschreibung: 'Objekt aus Fundstücken: Metall, Marmor, Holzplatte.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:7,
          id:1,
          titel:'Monolog',
          source:upcycling2,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:'Höhe ca. 25 cm',
          beschreibung: 'Objekt aus Fundstücken: Metall, Holz, Draht',
          altTxt:'Stahlfedern, die wie zwei Gestalten voreinander stehen. In einem schweren Sockel aus mit Pappmaché verkleidetem Holz.',
          schatten:false
        },
        {
          key:8,
          id:2,
          titel:'Unterhaltung auf hohem Niveau',
          source:upcycling3,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:'Höhe ca. 40 cm',
          beschreibung: 'Objekt aus Fundstücken: Metall, Holz, Gips.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:9,
          id:3,
          titel:'Auf gleicher Augenhöhe',
          source:upcycling4,altSrc: ['filename2','filename3'],
          preis:'unverkäuflich',verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:'Höhe ca. 40 cm',
          beschreibung: 'Objekt aus Fundstücken: Metall, Holz, Papier.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:10,
          id:4,
          titel:'Ins Gespräch vertieft',
          source:upcycling5,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:'Höhe: ca. 30 cm',
          beschreibung: 'Objekt aus Fundstücken: Metall, Holz, Gips.',
          altTxt:'ein Kunstobjekt aus zwei rostigen Stahlfedern die wie Gestalten voreinanderstehen.',
          schatten:false
        },
        {
          key:11,
          id:5,
          titel:'Kaum reicht man den kleinem Finger ...',
          source:upcycling6,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['objekt','abstrakt','metall','industrial','upcycling'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Ein kleines Objekt aus Fundstücken: Holz, Metall.',
          altTxt:'ein Kunstobjekt aus ....',
          schatten:false
        }
      ]
    },
    glitches: {
      infosSerie:'Digitale Fehldrucke haben die Künstlerin im ersten Corona-Lockdown zu diesen Bildern angeregt, weil dieses lesbare aber nicht verständliche Zeichengewirr als Metapher für diese Situation in der niemand richtig Bescheid wusste stehen kann. Sie hat bunte Farben gewählt, um aus der Tristesse des Eingesperrtseins heraus einen Hoffnungsschimmer aufzuzeigen. Andererseits ist es aber auch ein Statement der digitalen Unmöglichkeiten die im Home-Office die Menschen belasten.',
      entstanden:'März-Mai 2020',
      bilder:[
        {
          key:12,
          id:0,
          titel:'Home Office - Animation',
          source:glitches0,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['animation', 'druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Als GIF animiert: Die Bilderserie basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:48,
          id:1,
          titel:'Home Office 1',
          source:glitches1,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:49,
          id:2,
          titel:'Home Office 2',
          source:glitches2,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:50,
          id:3,
          titel:'Home Office 3',
          source:glitches3,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:51,
          id:4,
          titel:'Home Office 4',
          source:glitches4,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:52,
          id:5,
          titel:'Home Office 5',
          source:glitches5,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:53,
          id:6,
          titel:'Home Office 6',
          source:glitches6,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:54,
          id:7,
          titel:'Home Office 7',
          source:glitches7,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        },
        {
          key:55,
          id:8,
          titel:'Home Office 8',
          source:glitches8,altSrc: ['filename2','filename3'],
          preis:200,verkauft:false,
          tags:['druck','schrift','malerei','2020','malerei', 'öl'],
          gewicht:0, groesse:'Höhe ca. 30 cm',
          beschreibung: 'Basierend auf einem Fehldruck - Öl auf Leinwand.',
          altTxt:'....',
          schatten:true
        }
      ]
    },
    kfu: {
      infosSerie:'Mit Schwung und Drehung, ganz entspannt im "Hier und Jetzt", und mit einem breiten Kalligraphiepinsel sind diese überwiegend großformatigen Aquarelle entstanden. Das Experiment: erst auf der Pinselfläche wurden die Aquarellfarben gemischt. Dadurch war die Farbentwicklung auf dem Papier nicht direkt vorhersehbar.',
      entstanden:'ca. 2019',
      bilder:[
        {
          key:13,
          id:0,
          titel:'#1',
          source:kfu1,altSrc:['filename2','filename3'],
          preis:200, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:'60?',y:'80?',z:'?'},
          beschreibung: 'Aquarell auf Karton',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:14,
          id:1,
          titel:'#2',
          source:kfu2,altSrc:['filename2','filename3'],
          preis:200, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:25,y:30,z:3},
          beschreibung: 'Aquarell auf Karton',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:15,
          id:2,
          titel:'#3',
          source:kfu3,altSrc:['filename2','filename3'],
          preis:200, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:'60?',y:'80?',z:'?'},
          beschreibung: 'Aquarell auf Karton',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:16,
          id:3,
          titel:'#4',
          source:kfu4,altSrc:['filename2','filename3'],
          preis:200, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:'60?',y:'80?',z:'?'},
          beschreibung: 'Aquarell auf Karton',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:17,
          id:4,
          titel:'#5',
          source:kfu5,altSrc:['filename2','filename3'],
          preis:200, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:'60?',y:'80?',z:'?'},
          beschreibung: 'Aquarell auf Karton',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:18,
          id:5,
          titel:'#6',
          source:kfu6,altSrc:['filename2','filename3'],
          preis:200, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell'],
          gewicht:0, groesse:{x:'60?',y:'80?',z:'?'},
          beschreibung: 'Aquarell auf Karton',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:19,
          id:6,
          titel:'#7',
          source:kfu7,altSrc:['filename2','filename3'],
          preis:350, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell', 'Großformat'],
          gewicht:0, groesse:{x:'80?',y:'100?',z:'?'},
          beschreibung: '<p>Aquarell auf Karton.</p><p>Großformat.</p>',
          altTxt:'ein Aquarell-Experiment, dass einem geschwungenen, leicht sichelförmigen Herbstblatt aus Rot- und Grüntönen ähnelt.',
          schatten:true
        },
        {
          key:20,
          id:7,
          titel:'Anatomie 1',
          source:kfu8,altSrc:['filename2','filename3'],
          preis:150, verkauft:false, 
          tags:['malerei','aquarell','abstrakt','experimentell', 'gerahmt'],
          gewicht:0, groesse:{x:'30?',y:'30?',z:'5?'},
          beschreibung: '<p>Wasserfarben und Chinatusche, Passepartoutausschnitt ca. 25 x 25 cm, hochwertige Rahmung mit doppelter Verglasung. </p><p>Aquarell auf Karton</p>',
          altTxt:'',
          schatten:true
        }
      ]
    },
    // Kalligrafie 1/2/3..., Anatomie 1/2/3... einfügen!
    leute: {
      infosSerie: 'In dieser Serie hat die Künstlerin die „ganz normalen Menschen auf der Straße“ gemalt, die sie beobachtet und unbemerkt fotografiert hat. Es sind spontane, ungestellte Augenblicke ausgewählt, wobei die Beziehungen der Menschen untereinander sichtbar werden. Um den Blick auf das Wesentliche zu fokussieren, ist in vielen Bildern der Hintergrund (wie Straßen, Räume etc.) weitgehend weggelassen. Die Personen befinden sich in einem „leeren“ Farbraum und sprechen für sich.',
      entstanden:'ungefähr zu der Zeit, als die Handys populär wurden',
      bilder:[
        {
          key:21,
          id:0,
          titel:'#1',
          source:leute1,
          altSrc:['filename2','filename3'],
          preis:250, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'50? x 80? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p><p>Auf der Straße.</p><p>Hintergrung nicht dargestellt, um Begegnung / Beziehung hervorzuheben.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:22,
          id:1,
          titel:'Ballett',
          source:leute2,
          altSrc:['filename2','filename3'],
          preis:350, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'80? x 100? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p><p>Szene aus dem TV.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:23,
          id:2,
          titel:'Filmszene',
          source:leute3,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'80? x 60? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p><p>Szene aus dem TV.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:24,
          id:3,
          titel:'Chorsängerinnen',
          source:leute4,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'80? x 60? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p><p>Szene aus dem TV.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:25,
          id:4,
          titel:'Vor dem Live-Konzert',
          source:leute5,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'80? x 60? cm', 
          beschreibung: 'Acryl auf Leinwand.',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:26,
          id:5,
          titel:'#6',
          source:leute6,
          altSrc:['filename2','filename3'],
          preis:250, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'50? x 80? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p><p>Auf der Straße.</p><p>Hintergrung nicht dargestellt, um Begegnung / Beziehung hervorzuheben.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:27,
          id:6,
          titel:'#7',
          source:leute7,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'60? x 80? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p><p>Auf der Straße.</p><p>Hintergrung nicht dargestellt, um Begegnung / Beziehung hervorzuheben.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        },
        {
          key:28,
          id:7,
          titel:'Im Fischladen',
          source:leute8,
          altSrc:['filename2','filename3'],
          preis:250, verkauft:false, 
          tags:[], 
          gewicht:0, groesse:'50? x 80? cm', 
          beschreibung: '<p>Acryl auf Leinwand.</p>',
          altTxt:'ein paar Leute',
          schatten:true
        }
      ]
    },
    portraits: {
      infosSerie: 'Grundlage der Serie "Portraits" sind Fotos, die erst digital bearbeitet wurden und dann auf der Leinwand noch einmal analog. Abgebildet wurden Personen aus dem Familien- und Bekanntenkreis.',
      entstanden:'ca. 2009-2010',
      bilder:[
        {
          key:29,
          id:0,
          titel:'Selfie',
          source:portrait1,
          altSrc:['filename2','filename3'],
          preis:600, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'120 x 80 cm', 
          beschreibung: 'Acryl auf Leinwand',
          altTxt:'zwei tolle Frauen',
          schatten:true
        },
        {
          key:30,
          id:1,
          titel:'Profilbild',
          source:portrait2,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'60 x 80 cm', 
          beschreibung: 'Acryl auf Pappe',
          altTxt:'Das langjährige Profilbild des Entwicklers dieser Webseite',
          schatten:true
        },
        {
          key:31,
          id:2,
          titel:'Playing the Blues',
          source:portrait3,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'60 x 80 cm',
          beschreibung: 'Acryl auf Pappe',
          altTxt:'ein Arzt und Musiker',
          schatten:true
        },
        {
          key:32,
          id:3,
          titel:'Abgetaucht',
          source:portrait4,
          altSrc:['filename2','filename3'],
          preis:300, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'60 x 80 cm',
          beschreibung: 'Acryl auf Pappe',
          altTxt:'ein Herr mit Brille',
          schatten:true
        },
        {
          key:33,
          id:4,
          titel:'S.',
          source:portrait5,
          altSrc:['filename2','filename3'],
          preis:600, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'80 x 120 cm',
          beschreibung: 'Acryl auf Leinwand',
          altTxt:'eine dunkelhaarige Dame mit blumiger Bluse',
          schatten:true
        },
        {
          key:34,
          id:5,
          titel:'H.D.',
          source:portrait6,
          altSrc:['filename2','filename3'],
          preis:500, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'80 x 100 cm',
          beschreibung: 'Acryl auf Leinwand',
          altTxt:'eine rothaarige Dame mit weißer Bluse',
          schatten:true
        },
        {
          key:35,
          id:6,
          titel:'S.G.',
          source:portrait7,
          altSrc:['filename2','filename3'],
          preis:500, verkauft:true, 
          tags:['menschen','portraits','acryl','malerei'], 
          gewicht:0, groesse:'80 x 100 cm',
          beschreibung: 'Acryl auf Leinwand',
          altTxt:'eine dunkelhaarige Dame mit blumiger Bluse',
          schatten:true
        }
      ]
    },
    eyecandy: {
      infosSerie:'Die Formen und Farben der bekannten Süßigkeiten haben die Künstlerin inspiriert. Dadurch entstehen Ausschnitte und wallpaperartige Muster.',
      entstanden:'ca. 2000',
      bilder: [
        {
          key:36,
          id:0,
          titel:'#10',
          source:eyecandy1,altSrc:['filename2','filename3'],
          preis:500, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'], 
          gewicht:0, groesse:'80 x 120 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Kartoffeldruck & Mischtechnik</p>',
          altTxt:'',
          schatten:true
        },
        {
          key:37,
          id:1,
          titel:'#11',
          source:eyecandy2,altSrc:['filename2','filename3'],
          preis:400, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'],
          gewicht:0, groesse:'80 x 100 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Nahansicht</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:38,
          id:2,
          titel:'#12',
          source:eyecandy3,altSrc:['filename2','filename3'],
          preis:400, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'],
          gewicht:0, groesse:'80 x 100 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Nahansicht</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:39,
          id:3,
          titel:'#13',
          source:eyecandy4,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'],
          gewicht:0, groesse:'40 x 40 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Detailansicht</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:40,
          id:4,
          titel:'#14',
          source:eyecandy5,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'],
          gewicht:0, groesse:'40 x 40 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Detailansicht</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:41,
          id:5,
          titel:'#15',
          source:eyecandy6,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'],
          gewicht:0, groesse:'40 x 40 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Detailansicht</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        },
        {
          key:42,
          id:6,
          titel:'#16',
          source:eyecandy7,altSrc:['filename2','filename3'],
          preis:0, verkauft:false, 
          tags:['acryl','malerei','gegenständlich','musterhaft'],
          gewicht:0, groesse:'40 x 40 cm',
          beschreibung:'<p>Acryl auf Leinwand</p><p>Detailansicht</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:true
        }
      ]
    },
    oelsand: {
      infosSerie:'Hier wurden Naturmaterialien (Weserschlick, Wüstensand) mit Öl- oder Acrylfarbe kombiniert. Dies ist ein Materialexperiment, wo erkundet werden sollte, wie Farbe und natürlicher "Füllstoff" aufeinander reagieren.',
      entstanden:'ca. 2002',
      bilder:[
        {
          key:43,
          id:0,
          titel:'Rot 1',
          source:oelsand1,altSrc:['filename2','filename3'],
          preis:80, verkauft:false, 
          tags:['öl','malerei','spachtelmasse','abstrakt','organisch'], 
          gewicht:0, groesse:'25 x 25 cm',
          beschreibung:'<p>Experiment mit Farben und Naturmaterialien.</p><p>Ölfarbe, Spachtelmasse & Sahara-Sand.</p>',
          altTxt:"",
          schatten:false
        },
        {
          key:44,
          id:1,
          titel:'Weserschlick 1',
          source:oelsand2,altSrc:['filename2','filename3'],
          preis:80, verkauft:false, 
          tags:['acryl','malerei','abstrakt','organisch'], 
          gewicht:0, groesse:'25 x 25 cm',
          beschreibung:'<p>Experiment mit Farben und Naturmaterialien.</p><p>Acrylfarbe, Weserschlick.</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false
        },
        {
          key:45,
          id:2,
          titel:'Weserschlick 2',
          source:oelsand3,altSrc:['filename2','filename3'],
          preis:80, verkauft:false, 
          tags:['acryl','malerei','schlicksand','abstrakt','organisch'], 
          gewicht:0, groesse:'25 x 25 cm',
          beschreibung:'<p>Experiment mit Farben und Naturmaterialien.</p><p>Acrylfarbe, Weserschlick.</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false
        },
        {
          key:46,
          id:3,
          titel:'Weserschlick 3',
          source:oelsand4,altSrc:['filename2','filename3'],
          preis:80, verkauft:false, 
          tags:['acryl','malerei','abstrakt','organisch'], 
          gewicht:0, groesse:'25 x 25 cm',
          beschreibung:'<p>Experiment mit Farben und Naturmaterialien.</p><p>Acrylfarbe, Weserschlick.</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false
        },
        {
          key:47,
          id:4,
          titel:'Ölsand 5',
          source:oelsand5,altSrc:['filename2','filename3'],
          preis:80, verkauft:false, 
          tags:['öl','malerei','spachtelmasse','abstrakt','organisch'], 
          gewicht:0, groesse:'25 x 25 cm',
          beschreibung:'<p>Experiment mit Farben und Naturmaterialien.</p><p>Ölfarbe, Spachtelmasse & Sahara-Sand.</p>',
          altTxt:'ein regelmäßiges Muster aus Haribos',
          schatten:false  
        }
      ]
    }
  }

  return(
    <Provider value={{ bilder, screen_size, aktive_objekte, matter }}>
      <>
        <Router>
          <Menu /> 
          <div className="container">
            <Routes>
              <Route exact path='/'><Home/></Route>
              <Route exact path='/bilder/kfu/:leftValue'><Bilderwand key='0' id='0' bilder={bilder.kfu} titel='Kalligrafische Experimente'/></Route>
              <Route exact path='/bilder/fotocollagen/:leftValue'><Bilderwand key='1' id='1' bilder={bilder.fotocollagen} titel='Fotocollagen'/></Route>
              <Route exact path='/bilder/glitches/:leftValue'><Bilderwand key='2' id='2' bilder={bilder.glitches} titel='Glitches'/></Route>
              <Route exact path='/bilder/oelsand/:leftValue'><Bilderwand key='3' id='3' bilder={bilder.oelsand} titel='Naturstoffe'/></Route>
              <Route exact path='/bilder/upcycling/:leftValue'><Bilderwand key='4' id='4' bilder={bilder.upcycling} titel='Upcycling'/></Route>
              <Route exact path='/bilder/zufallsbegegnungen/:leftValue'><Bilderwand key='5' id='5' bilder={bilder.leute} titel='Zufallsbegegnungen'/></Route>
              <Route exact path='/bilder/portraits/:leftValue'><Bilderwand key='6' id='6' bilder={bilder.portraits} titel='Portraits'/></Route>
              <Route exact path='/bilder/suesses/:leftValue'><Bilderwand key='7' id='7' bilder={bilder.eyecandy} titel='Sweets'/></Route>
              <Route exact path='/impressum'><Impressum/></Route>
              <Route exact path='/login'><Login/></Route>
              <Route exact path='/kuenstlerin'><Artist/></Route>
              <Route exact path='/kontakt'><KontaktDisclaimer/></Route>
            </Routes>
          </div>
        </Router>
      </>
    </Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

