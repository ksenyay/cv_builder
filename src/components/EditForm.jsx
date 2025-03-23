
import './EditForm.css'
import { useState } from 'react'

export default function EditForm(props) {

    const [currentForm, setcurrentForm] = useState(1)
    
    return (
     <div className='edit-section'>
        <div className='category-selector'>
          <button onClick={() => setcurrentForm(1)}>General</button>
          <button onClick={() => setcurrentForm(2)}>Education</button>
          <button onClick={() => setcurrentForm(3)}>Skills</button>
          <button onClick={() => setcurrentForm(4)}>Experience</button>
        </div>
        {currentForm === 1 && <FormOne generalData={props.generalData} 
                                       setGeneralData={props.setGeneralData} />}
        {currentForm === 2 && <FormTwo educationData={props.educationData} 
                                       setEducationData={props.setEducationData}/>}
        {currentForm === 3 && <FormThree setHardSkills={props.setHardSkills}
                                         setSoftSkills={props.setSoftSkills}
                                         setLanguages={props.setLanguages}/>}
        {currentForm === 4 && <FormFour experienceData={props.experienceData}
                                        setExperienceData={props.setExperienceData}/>}

      </div>
    )
}


function FormOne({ generalData, setGeneralData }) {
    return (
    <form>
        <div>
            <label htmlFor="full-name">Full name:</label>
            <input type="text"  id="full-name"  onChange={e => setGeneralData({ ...generalData, name: e.target.value })}/>
        </div>
        <div>
            <label htmlFor="phone-number">Phone:</label>
            <input type="tel"  id="phone-number" pattern="[0-9+ ]+" onChange={e => setGeneralData({ ...generalData, phone: e.target.value })}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"  onChange={e => setGeneralData({ ...generalData, email: e.target.value })}/>
        </div>
        <div>
            <label htmlFor="city">Location:</label>
            <input type="text" id="city"  onChange={e => setGeneralData({ ...generalData, location: e.target.value })}/>
        </div>
        <div>
            <label htmlFor="website">Website:</label>
            <input type="text" id="website"  onChange={e => setGeneralData({ ...generalData, website: e.target.value })}/>
        </div>
    </form>
    )
}


function FormTwo( { setEducationData }) {
    const [formData, setFormData] = useState();
    const [firstRemoved, setFirstRemoved] = useState(false);

    function removeFirstOnce() {
        if (!firstRemoved) {
            setEducationData(prevEducationData => prevEducationData.slice(1));
            setFirstRemoved(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        removeFirstOnce();

        let newEntry = { ...formData, id: crypto.randomUUID() };
        
        setEducationData(prevEducationData => [...prevEducationData, newEntry]);
    }

    function handleChange(e) {
        setFormData(prevFormData => ({
            ...prevFormData,  [e.target.id]: e.target.value
        }));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="university">University*</label>
                    <input type="text" id="university" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="course">Course Name*</label>
                    <input type="text" id="course" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="location">Location*</label>
                    <input type="text" id="location" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="start">Start Date*</label>
                    <input type="date" id="start" onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="end">End Date*</label>
                    <input type="date" id="end" onChange={handleChange} required/>
                </div>

                <button type="submit">Add Education</button>
            </form>
        </>
    );
}

function FormThree( props ) {

    function handleSubmit(id, event) {
        event.preventDefault();

        let inputValue = document.getElementById(id).value;

        if (inputValue === '') return

        if (id === 'hard-skills') {
            props.setHardSkills(prevHardSkills => [...prevHardSkills, {name: inputValue, id: crypto.randomUUID()}])
        } else if (id === 'soft-skills') {
            props.setSoftSkills(prevSoftSkills => [...prevSoftSkills, {name: inputValue, id: crypto.randomUUID()}])
        } else {
            props.setLanguages(prevLanguages => [...prevLanguages, {name: inputValue, id: crypto.randomUUID()}])
        }

        document.getElementById(id).value = ''
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
        }
    }

    return (
    <form>
        <div className='skills'>
            <label htmlFor="hard-skills">Hard Skills:</label>
            <input type="text" id="hard-skills" onKeyDown={handleKeyDown}/>
            <button onClick={(event) => handleSubmit('hard-skills', event)}>Add</button>
        </div>
        <div className='skills'>   
            <label htmlFor="soft-skills">Soft Skills:</label>
            <input type="text" id="soft-skills" onKeyDown={handleKeyDown}/>
            <button onClick={(event) => handleSubmit('soft-skills', event)}>Add</button>
        </div>
        <div className='skills'>
            <label htmlFor="languages">Languages:</label>
            <input type="text" id="languages" onKeyDown={handleKeyDown}/>
            <button onClick={(event) => handleSubmit('languages', event)}>Add</button>
        </div>
    </form>
    )
}

function FormFour({ setExperienceData }) {

    const [formData, setFormData] = useState();
    const [firstRemoved, setFirstRemoved] = useState(false);

    function removeFirstOnce() {
        if (!firstRemoved) {
            setExperienceData(prevEducationData => prevEducationData.slice(1));
            setFirstRemoved(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        removeFirstOnce();

        let newEntry = { ...formData, id: crypto.randomUUID() };
        
        setExperienceData(prevEducationData => [...prevEducationData, newEntry]);
    }

    function handleChange(e) {
        setFormData(prevFormData => ({
            ...prevFormData,  [e.target.id]: e.target.value
        }));
    }
    
    return (
    <form onSubmit={handleSubmit}> 
        <div>
            <label htmlFor="position">Position*</label>
            <input type="text" id="position" onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="company">Company*</label>
            <input type="text" id="company" onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="start_date">Start Date*</label>
            <input type="date" id="start_date" onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="end_date">End Date*</label>
            <input type="date" id="end_date" onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="location">Location*</label>
            <input type="text" id="location" onChange={handleChange} required/>
        </div>
        <div className='responsibilities-textarea'>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea id="responsibilities" onChange={handleChange}/>
        </div>

        <button>Add Experience</button>
    </form>
    )
}