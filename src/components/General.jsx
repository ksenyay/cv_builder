

export default function General({ generalData }) {

    return (
        <div className="general-section">
            <h2>{generalData.name != "" ? generalData.name : "Ksenya Usachova"}</h2>
            <div className="contact-container">

                <p>{generalData.location != "" ? generalData.location : "Lviv, Ukraine"}</p>
                <a href={generalData.website} target="_blank">{generalData.website != "" ? generalData.website : "github.com/ksenyay"}</a>
                <p>{generalData.email != "" ? generalData.email : "ksenyau@gmail.com"}</p>
                <p>{generalData.phone != "" ? generalData.phone : "+380 00 0000 000"}</p>
    
            </div>
        </div>
    )
}
