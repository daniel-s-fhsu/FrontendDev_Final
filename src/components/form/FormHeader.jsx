import React from "react";

export default function FormHeader(props) {
    return (
        <div>
            <h2 id="headerTitle" className="text-xl sm:text-2xl">{props.title}</h2>
        </div>
    );
}