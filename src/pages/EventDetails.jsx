import { useParams } from "react-router-dom";
import { GetEvent } from "../data/EventLoader";

function EventDetails() {
    let { id } = useParams();
    const selectedEvent = GetEvent(id);
    return(
        <div>
            <p>{selectedEvent.title}</p>
        </div>
    );
}

export default EventDetails;