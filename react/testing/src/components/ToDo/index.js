import { useState } from 'react'

const defaultItem = [
    {
        name: 'Item A'
    },
    {
        name: 'Item B'
    },
    {
        name: 'Item C'
    }
]

function ToDo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItem);
    const addItem = () => {
        setItems((prev) => [...prev, { name: text }]);
        setText("");
    }

    return (
        <div>
            <label>
                Text<br/>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button onClick={addItem}>Click</button>

            <br />
            <br />
            {
                items.map((item, key) => (
                    <div key={key}>{item.name}</div>
                ))
            }
        </div>
    )
}

export default ToDo;