import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function User() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data));
    }, []);
    return (
        <div>
            <h2>User</h2>
            name: {user.name}
            <br />
            id: {id}
        </div>
    );
}

export default User;