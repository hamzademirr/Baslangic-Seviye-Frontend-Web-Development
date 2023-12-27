import { useEffect, useState } from "react";

function Users(){
    const [users, setUsers] = useState([]);
    const [isLoding, setIsLoding] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => setUsers(users))
        .catch((e) => console.log(e))
        .finally(() => setIsLoding(false));
    }, [])
    return (
        <div>
            <h1>Users</h1>
            {isLoding && <div>Loding...</div>}
            {
                users.map((user, index) => (
                    <div key={index}>{user.name}</div>
                ))
            }
        </div>
    );
}

export default Users;