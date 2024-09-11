import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Pankaj Bisht",
                location: "N.A"
            }
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/akshaymarch7");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const json = await response.json();
            this.setState({ userInfo: json });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        const { name, location } = this.state.userInfo;

        return (
            <div className="bg-white p-6 m-4 border rounded-lg shadow-md w-full max-w-sm mx-auto">
                <h2 className="text-xl font-bold mb-2">Name: {name}</h2>
                <h3 className="text-lg text-gray-700 mb-2">Location: {location || "N.A"}</h3>
            </div>
        );
    }
}

export default UserClass;
