import { useState, useEffect } from "react";
import { useDebounce } from '@uidotdev/usehooks';

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

    // useDebounce(() => {
    //     if (form.name && form.email && form.password !== "") {
    //         console.log("Yazim durdu")
    //         setIsWrite(() => true);
    //         setIsVisible(() => true);

    //         const interval = setInterval(() => {
    //             setIsVisible(() => false);
    //             setIsWrite(() => false);
    //             clearInterval(interval);
    //         }, 3000);
    //     }
    // }, 3000)



    // useEffect(() => {
    //     console.log("yaziliyor")
    // }, [form.name, form.email, form.password, useDebounce(3000)]);


    const debouncedForm = useDebounce(form, 3000);
    useEffect(() => {
        if(isRender){
            return setIsRender(false);
        }
        console.log("Yazim Durdu: ", debouncedForm);
        console.log("Yazim durdu")
        setIsWrite(() => true);
        setIsVisible(() => true);

        const interval = setInterval(() => {
            setIsVisible(() => false);
            setIsWrite(() => false);
            clearInterval(interval);
        }, 3000);

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