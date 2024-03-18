import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './components/navBar.jsx';
import AboutMe from './components/about-Me.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';

export default function Portfolio() {
  return (
    <>
      <NavBar/>
      <AboutMe/>
      <Education/>
      <Projects/>
    </>
  )
}


