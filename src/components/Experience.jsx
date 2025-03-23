export default function Experience(props) {

    function removeElement(id) {
        props.setExperienceData(prevExperienceData => prevExperienceData.filter(element => element.id !== id));
    }

    const experienceSection = props.experienceData.map(element => 
            (Object.keys(element).length != 0 && 

            <li key={element.id} className="experience-list" onClick={() => removeElement(element.id)}>
               <div className="experience-first">
                    <h6>{element.position}</h6>
                    <p>{element.start_date.slice(5, 7) + "." + element.start_date.slice(0, 4) + " - " + element.end_date.slice(5, 7) + "." + element.end_date.slice(0, 4)}</p>
               </div>
               <div className="experience-second">
                    <p>{element.company}</p>
                    <p>{element.location}</p>
               </div>
               <p id="textarea-paragraph">{element.responsibilities}</p>
            </li>
        )
    )

    return (
    <div className="experience-container">
        <h3>Experience</h3>
        <ul>{experienceSection}</ul>
    </div>
    )
}