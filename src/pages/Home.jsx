import events from "../data/data";
import EventCard from "../components/EventCard";

function Home() {


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