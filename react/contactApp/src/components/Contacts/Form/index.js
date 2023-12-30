import { useState, useEffect } from "react";

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({ fullName: "", phone_number: "" });

    useEffect(() => {
        setForm({ fullName: "", phone_number: ""});
        console.log("bu meret calisiyor")
    }, [contacts])

    const onChangeInput = ((e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    });
    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullName === "" || form.phone_number === ""){
            return false;
        }
        addContact([...contacts, form]);
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input name="fullName" placeholder="Full Name" onChange={onChangeInput} />
            </div>

            <div>
                <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} />
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form;