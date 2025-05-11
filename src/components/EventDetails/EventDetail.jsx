import GoogleMapEmbed from "./GoogleMapEmbed";

function EventDetail({event}) {
    return (
        <div className="">
            <h1 className="underline text-3xl text-center">{event.title}</h1>
            <p>{event.date} / ${event.price} per ticket</p>
            <p>{event.description}</p>
            <p>Location: {event.location}</p>
            <GoogleMapEmbed location={event.location} />
            <button className="border m-10 w-100">Add to cart</button>
        </div>
    );
}

export default EventDetail;