import React from "react";

function List({ contacts }){
    return <div>
        <ul>
            {
                contacts.map((contact, index) => {
                    return <li key={index}>{contact.fullName}</li>
                })
            }
        </ul>
    </div>;
}

export default List;