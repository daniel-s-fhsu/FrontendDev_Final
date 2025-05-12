import GoogleMapEmbed from "./GoogleMapEmbed";
import BasicButton from "../BasicComponents/BasicButton";
import { useDispatch } from 'react-redux';
import { addEventToCart } from "../../data/cartSlice";

function EventDetail({event}) {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addEventToCart({name: event.title, date: event.date, price: event.price}));
        alert("Cart updated");
    }

    return (
        <div className="">
            <h1 className="underline text-3xl text-center">{event.title}</h1>
            <p>{event.date} / ${event.price} per ticket</p>
            <p>{event.description}</p>
            <p>Location: {event.location}</p>
            <GoogleMapEmbed location={event.location} />
            <BasicButton handleClick={handleAdd}>Add to cart</BasicButton>
        </div>
    );
}

export default EventDetail;