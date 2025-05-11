import React from "react";

export default function FormButton(props) {
  return (
    <div id="button" className="row">
      <button
        className="border m-10 w-70 px-4 py-2 rounded bg-blue-500 text-white 
                   hover:bg-blue-600 hover:scale-105 
                   active:bg-blue-700 active:scale-95 
                   transition duration-150 ease-in-out"
      >
        {props.title}
      </button>
    </div>
  );
}
