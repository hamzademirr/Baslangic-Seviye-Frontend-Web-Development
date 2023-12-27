import { useState, useEffect } from "react";
import { useDebounce } from '@uidotdev/usehooks';

// import { useDebounce } from '@uidotdev/usehooks'; çağırmadan kullanmak için
// function useDebounce(text, delay) {
//     const [value, setValue] = useState('');

//     useEffect(() => {
//         const timerId = setTimeout(() => {
//             setValue(text);
//         }, delay);
//         return () => {
//             clearTimeout(timerId);
//         };
//     }, [text, delay]);
//     return value;
// }

function HomeWork() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    const [isWrite, setIsWrite] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isRender, setIsRender] = useState(true);
    const [lastForm, setLastForm] = useState({});


    const debouncedForm = useDebounce(form, 1000);
    useEffect(() => {
        if (isRender) {
            return setIsRender(false);
        }
        if (JSON.stringify(debouncedForm) !== JSON.stringify(lastForm)) {
            console.log(debouncedForm);
            console.log(lastForm);
            console.log(JSON.stringify(debouncedForm));
            console.log(JSON.stringify(lastForm));
            console.log("Yazim Durdu: ");
            console.log("Yazim durdu")
            setIsWrite(() => true);
            setIsVisible(() => true);

            setTimeout(() => {
                setIsVisible(() => false);
                setIsWrite(() => false);
            }, 1000);

            setLastForm(JSON.parse(JSON.stringify(debouncedForm)));
        }

    }, [debouncedForm]);


    return (
        <div>
            Name <br />
            <input name="name" value={form.name} onChange={onChangeForm} disabled={isWrite} /> <br />
            Email <br />
            <input name="email" value={form.email} onChange={onChangeForm} disabled={isWrite} /> <br />
            Password <br />
            <input name="password" value={form.password} onChange={onChangeForm} disabled={isWrite} />

            <br />
            <hr />
            <br />

            Name: {form.name} <br />
            Email: {form.email} <br />
            Password: {form.password} <br />

            {isVisible &&
                <div>
                    <br />
                    <hr />
                    <h1>Kaydediliyor...</h1>
                </div>
            }
        </div>
    )
}

export default HomeWork;