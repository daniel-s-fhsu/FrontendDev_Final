import { GetAllEvents } from "../data/EventLoader";
import EventCard from "../components/EventCard";

function Home() {
    const events = GetAllEvents();

    return (
        <div>
            <h1>Home Page</h1>
            <div className="flex flex-wrap">
                {events.map(event => (
                    <EventCard event={event} key={event.id}/>
                ))}
            </div>
        </div>
    );
}

export default Home;