import { useState } from "react";

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(42);
  const [frends, setFrends] = useState(["Ahmet", "Zeki"]);
  const [address, setAddress] = useState({ title: "Giresun", zip: 28000 });

  return (
    <div className="App">
      <h1>isim: {name}</h1>
      <h2>yas: {age}</h2>
      <button onClick={() => setName("Ali")}>change name</button>
      <button onClick={() => setAge(24)}>change age</button>

      <hr />
      <br />

      {
        frends.map((frend, index) => (
          <div key={index}>
            {frend}
          </div>
        ))
      }
      <br />
      <button onClick={() => setFrends([...frends, "Ayse"])}>add frend</button>

      <hr />
      <br />
      
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({ title: "Ankara", zip: 26000 })}>change the address</button>
    </div>
  );
}

export default App;
