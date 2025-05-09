
import { Link } from 'react-router-dom';

function EventCard({ event }) {
    
    return(
        <div className="eventCard border-2">
            <h1><Link to={`/event/${event.id}`}>{event.title}</Link></h1>
            <hr />
            <strong>{event.date}</strong>
            <p>{event.location}</p>
            <p>{event.price}</p>
        </div>
    );
}

export default EventCard;