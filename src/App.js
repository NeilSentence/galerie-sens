import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
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








class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{background:"white"}}>
          <Router>
            <Menu /> 
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/impressum' element={<Impressum />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/artist' element={<Artist />} />
              </Routes>
            </div>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;