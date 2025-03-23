import styles from "./styles/App.module.css";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Project/Projects.jsx";
import { Contact } from "./components/Contact.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
