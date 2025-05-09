
function EventCard({ event }) {
    return(
        <div className="eventCard">
            <p>test</p>
            <h1>{event.title}</h1>
            <hr />
            <strong>{event.date}</strong>
            <p>{event.location}</p>
            <p>{event.price}</p>
        </div>
    );
}

export default EventCard;