import { useState } from "react";

const User = (props) => {
    const [state] = useState(0);
    const [state2] = useState(1);

    return (
        <div className="bg-white p-6 m-4 border rounded-lg shadow-md w-full max-w-sm mx-auto">
            <h1 className="text-xl font-bold mb-4">Count: {state2}</h1>
            <h2 className="text-lg font-semibold mb-2">Name: {props.Name}</h2>
            <h3 className="text-md text-gray-700 mb-2">Location: {props.Location}</h3>
            <h3 className="text-md text-gray-700">Contact: 999-999-9999</h3>
        </div>
    );
}

export default User;
