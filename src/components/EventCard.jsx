import { Link } from 'react-router-dom';

function EventCard({ event }) {
    return (
        <Link
            to={`/event/${event.id}`}
            className="
                        block border-2 rounded-lg m-5 p-5 w-60 flex-initial
                        bg-[#331B3F] text-[#ACC7B4]
                        hover:bg-[#40214f] hover:-translate-y-2 hover:translate-x-2
                        transition-transform duration-200 ease-in-out
                        shadow-md hover:shadow-lg">

            <h1 className="text-lg mb-5 underline">{event.title}</h1>
            <img src={`/assets${event.thumbnail}`} alt={`${event.title} thumbnail`} className="mb-3 rounded" />
            <strong className="block mb-1">{event.date}</strong>
            <p className="mb-1">{event.location}</p>
            <p>${event.price}</p>
        </Link>
    );
}

export default EventCard;
