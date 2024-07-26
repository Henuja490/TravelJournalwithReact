import React from "react"

export default function Card(props){
    return(
    
    <div className="Card">
        <img src={`../images/${props.coverImg}`} className="card--img"/>
        <section className="discription">
            <div className="card-location">
            <img src="../images/icon.jpg"
                className="Icon--loc"
            /><h4 className="country">{props.country}</h4>
            <a href={props.location} className="grey" target="_blank">View on Google Map</a></div>
            <h1>{props.title}</h1>
            <p className="bold">{props.Date.open} - {props.Date.close}</p>

            <p>{props.description}</p>
        </section>
    </div>
    )
}