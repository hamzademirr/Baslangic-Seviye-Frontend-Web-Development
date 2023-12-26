import { useState } from "react";

function InputExample() {
    // const [name, setName] = useState("");
    // const [surName, setSurname] = useState("");
    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname(event.target.value);

    const [form, setForm] =useState({name: "", surName: ""});
    const onChangeForm = (event) => {
        console.log(event.target);
        setForm({...form, [event.target.name]: event.target.value});
    }
    return (
        <div>
            {/* Name <br />
            <input value={name} onChange={onChangeName} /> <br />
            Surname <br />
            <input value={surName} onChange={onChangeSurname} /> <br />
            {name} {surName} */}

            Name <br />
            <input name="name" value={form.name} onChange={onChangeForm} /> <br />
            Surname <br />
            <input name="surName" value={form.surName} onChange={onChangeForm} /> <br />
            {form.name} {form.surName}
        </div>
    );
}

export default InputExample;