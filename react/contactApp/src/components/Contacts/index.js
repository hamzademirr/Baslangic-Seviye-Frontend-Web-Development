import { useState, useEffect } from "react";

import List from "./List/index";
import Form from "./Form/index"

function Contacts(){
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        console.log(contacts);
    }, [contacts])
    
    return <div>
        <List />
        <Form addContact={setContacts} contacts={contacts} />
    </div>;
}

export default Contacts;