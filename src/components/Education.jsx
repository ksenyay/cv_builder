export default function Education(props) {

    function removeElement(id) {
        props.setEducationData(prevEducationData => prevEducationData.filter(element => element.id !== id));
    }

    const educationSection = props.educationData.map(element => 
            (Object.keys(element).length != 0 && 

            <li key={element.id} className="education-list" onClick={() => removeElement(element.id)}>
                <div className="education-first">
                    <h4>{element.university}</h4>
                    <p>{element.course}</p>
                </div>
                <div className="education-second">
                    <p>{element.location}</p>
                    <p>{element.start.slice(5, 7) + "." + element.start.slice(0, 4) + " - " + element.end.slice(5, 7) + "." + element.end.slice(0, 4)}</p>
                </div>
            </li>
        )
    )

    return ( 
        
        <div className="education-container">
            <h3>Education</h3>
            <ul>{educationSection}</ul>
        </div>
    )
}