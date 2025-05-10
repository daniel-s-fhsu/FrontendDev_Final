
import { Link } from 'react-router-dom';

function EventCard({ event }) {
    // This is the event card for use on the main page - pretty basic summary
    return(
        <div className="eventCard border-2 rounded-lg m-5 p-5 w-60 flex-initial">
            <h1 className="text-neutral-300 text-lg mb-5 underline"><Link to={`/event/${event.id}`}>{event.title}</Link></h1>
            <img src={`/assets${event.thumbnail}`} />
            <strong>{event.date}</strong>
            <p>{event.location}</p>
            <p>${event.price}</p>
        </div>
    );
}

export default EventCard;