import "./App.css";
import Bio from "./components/bios";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Biographies</h1>
        <Bio
          name="Luis Fernando Vargas Pena"
          country="Colombia"
          image="fernando"
          profession="Web Developer"
          bioStory="Motivated and detail-oriented Web Developer with a Diploma in Web Development and Internet Applications from Algonquin College graduated with Honours. Proficient in HTML5, CSS3, JavaScript, with knowledge of REST APIs, PHP, React.js, and Node.js, Git and GitHub. Experienced in personal and group projects, including the development of a restaurant web page. Committed to continuous learning and passionate about developing innovative web solutions."
        />

        <Bio
          name="Jenny Marcela Moncada Snachez"
          country="Colombia"
          image="marcela"
          profession="Dental assistant"
          bioStory="Highly motivated and detail-oriented Dental Assistant with a proven track record of implementing patient education programs, streamlining inventory management systems, and developing patient recall systems resulting in increased patient compliance, reduced supply waste, and improved patient retention. Skilled in infection control protocols, treatment planning, and team training, with a strong commitment to delivering exceptional patient care. Seeking to leverage my skills and experience to contribute to a dynamic dental practice."
        />
      </div>
    </div>
  );
}

export default App;
