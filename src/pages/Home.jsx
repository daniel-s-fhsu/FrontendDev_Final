import { GetAllEvents } from "../data/EventLoader";
import EventCard from "../components/EventCard";

function Home() {
    const events = GetAllEvents();

    return (
        <div>
            <h1>Home Page</h1>
            {events.map(event => (
                <EventCard event={event} />
            ))}
        </div>
    );
}

export default Home;