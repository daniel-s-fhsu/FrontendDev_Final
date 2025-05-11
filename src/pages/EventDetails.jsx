import { useParams } from "react-router-dom";
import { GetEvent } from "../data/EventLoader";
import EventDetail from "../components/EventDetails/EventDetail";

function EventDetails() {
    let { id } = useParams();
    const selectedEvent = GetEvent(id);
    return(
        <div className="flex justify-center min-h-screen">
            <EventDetail event={selectedEvent} />
        </div>
    );
}

export default EventDetails;