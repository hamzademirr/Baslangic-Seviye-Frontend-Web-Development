import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return <div className="App">
    {isVisible && <Counter />}

    <hr />
    <br />
    <button onClick={() => setIsVisible(false)}>Toggle</button>
  </div>
}

export default App;
