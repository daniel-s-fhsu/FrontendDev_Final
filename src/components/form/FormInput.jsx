import React from "react";

export default function FormInput(props) {
    return (
        <div className='row my-2'>
            <label className="block text-sm font-medium mb-1">{props.description}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.id} value={props.value} onChange={props.onChange}
                className={props.className + " w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white text-gray-900"}
            />
        </div>
    );

};