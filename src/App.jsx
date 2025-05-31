import EditForm from "./components/EditForm";
import Resume from "./components/Resume";

import { useState } from "react";

function App() {
  // Default data

  const [generalData, setGeneralData] = useState({
    name: "Thomas Murphy",
    phone: "3342-1560",
    email: "thomas.m@gmail.com",
    location: "London, England",
    website: "https://github.com",
  });

  const [educationData, setEducationData] = useState([
    {
      university: "University of Cambridge",
      course: "Computer Science, BA",
      location: "Cambridge, England",
      start: "2019.09.01",
      end: "2023.06.01",
      id: "1",
    },
  ]);

  const [hardSkills, setHardSkills] = useState([
    {
      name: "HTML, CSS",
      id: "1",
    },
    {
      name: "JavaScript ES6",
      id: "2",
    },
    {
      name: "ReactJS, NodeJS",
      id: "3",
    },
  ]);

  const [softSkills, setSoftSkills] = useState([
    {
      name: "Communication",
      id: "1",
    },
    {
      name: "Problem Solving",
      id: "2",
    },
    {
      name: "Responsibility",
      id: "3",
    },
  ]);

  const [languages, setLanguages] = useState([
    {
      name: "English: C1",
      id: "1",
    },
    {
      name: "Ukrainian: C2",
      id: "2",
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      position: "Junior Front-End Developer",
      company: "Tech Innovations Ltd.",
      start_date: "2024.01.01",
      end_date: "2024.05.01",
      location: "Manchester, England",
      responsibilities:
        "- Assisted in the design and development of responsive web pages and user interfaces using HTML, CSS, and JavaScript.",
      id: "1",
    },
    {
      position: "Trainee Software Engineer",
      company: "Alphabet Inc.",
      start_date: "2023.08.12",
      end_date: "2023.12.01",
      location: "London, England",
      responsibilities:
        "- Collaborate with cross-functional teams to design, develop, and test innovative software solutions.",
      id: "2",
    },
  ]);

  return (
    <>
      <h1>CV BUILDER</h1>
      <div className="container">
        <EditForm
          generalData={generalData}
          educationData={educationData}
          setExperienceData={setExperienceData}
          setGeneralData={setGeneralData}
          setEducationData={setEducationData}
          setSoftSkills={setSoftSkills}
          setHardSkills={setHardSkills}
          setLanguages={setLanguages}
        />
        <Resume
          generalData={generalData}
          educationData={educationData}
          experienceData={experienceData}
          softSkills={softSkills}
          hardSkills={hardSkills}
          languages={languages}
          setExperienceData={setExperienceData}
          setEducationData={setEducationData}
          setSoftSkills={setSoftSkills}
          setHardSkills={setHardSkills}
          setLanguages={setLanguages}
        />
      </div>
      <button className="savePdf" onClick={() => window.print()}>
        Save as PDF
      </button>
    </>
  );
}

export default App;
