export default function Skills(props) {

    function removeHardSkill(id) {
        props.setHardSkills(prevHardSkills => prevHardSkills.filter(element =>  element.id !== id))
    }

    function removeSoftSkill(id) {
        props.setSoftSkills(prevSoftSkills => prevSoftSkills.filter(element =>  element.id !== id))
    }

    function removeLanguage(id) {
        props.setLanguages(prevLanguages => prevLanguages.filter(element =>  element.id !== id))
    }
    
    const hard = props.hardSkills.map((element) => {
        return Object.keys(element).length !== 0 && (
            <li key={element.id} onClick={() => removeHardSkill(element.id)}>{element.name}</li>
        );
    });

    const soft = props.softSkills.map((element) => {
        return Object.keys(element).length !== 0 && (
            <li key={element.id} onClick={() => removeSoftSkill(element.id)}>{element.name}</li>
        );
    });

    const language = props.languages.map((element) => {
        return Object.keys(element).length !== 0 && (
            <li key={element.id} onClick={() => removeLanguage(element.id)}>{element.name}</li>
        );
    });

    return (
        <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills-section">
                <div>
                    <h5>Hard Skills:</h5>
                    <ul>{hard}</ul>
                </div>
                <div>
                    <h5>Soft Skills:</h5>
                    <ul>{soft}</ul>
                </div>
            </div>
            <div className="languages-section">        
                <h5>Languages: </h5>
                <ul>{language}</ul>
            </div>
        </div>
    );
}