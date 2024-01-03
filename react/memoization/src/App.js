import './App.css';
import { useState, useMemo, useCallback } from "react";
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  // const data = {name: "Mehmet"} fonksiyonun disina yazilarak da sorun cozule bilir
  const data = useMemo(() => {
    return {name: "Mehmet"}
  }, [])

  const incremant = useCallback(() => {
    setNumber((prevState) => prevState + 1 );
  }, [])
  return (
    <div className="App">
      <Header incremant={incremant} />

      <hr />

      <h1>{number}</h1>
    </div>
  );
}

export default App;