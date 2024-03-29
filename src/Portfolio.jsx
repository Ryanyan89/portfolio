import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navBar.jsx';
import AboutMe from './components/about-Me.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';

export default function Portfolio() {
  return (
    <>
      <NavBar/>
      <div id='About-me'>
        <AboutMe/>
      </div>
      <div id='Education'>
        <Education/>
      </div>
      <div id='Projects'>
        <Projects/>
      </div>
    </>
  )
}


