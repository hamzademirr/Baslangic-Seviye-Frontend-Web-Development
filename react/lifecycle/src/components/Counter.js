import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Mehmet");
  
  useEffect(() => {
    console.log("component mount edildi")

    const interval = setInterval(() => {
        setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Number State Guncellendi")
  }, [number]); // [number, name] seklinde bir den fazla deger de girile bilir
  useEffect(() => {
    console.log("Name State Guncellendi")
  }, [name]);

  return (
    <div className="Counter">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Ali")}>Click</button>
    </div>
  );
}

export default Counter;
