import './Resume.css'

import General from './General.jsx'
import Education from './Education.jsx'
import Skills from './Skills.jsx'
import Experience from './Experience.jsx'

export default function Resume(props) {
    return (
        <div className='resume-section'  id='content'>
            <General generalData={props.generalData}/>
            <Education educationData={props.educationData} 
                       setEducationData={props.setEducationData}
            />
            <Skills softSkills={props.softSkills} 
                    hardSkills={props.hardSkills} 
                    languages={props.languages}
                    setSoftSkills={props.setSoftSkills} 
                    setHardSkills={props.setHardSkills} 
                    setLanguages={props.setLanguages}
            />
             <Experience experienceData={props.experienceData}
                        setExperienceData={props.setExperienceData}
            />
        </div>

    )
}
