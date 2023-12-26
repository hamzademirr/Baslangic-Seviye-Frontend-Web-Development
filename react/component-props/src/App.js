// import {Fragment} from "react";
import './App.css';
import Header from "./components/header";
import User from "./components/user";

const name = "Mehmet";
const surname = "Kaya";
const isLoggedIn = false;

function App() {
  return (
    <>
      <h1>React</h1>
      <Header />
      <p className="xyz"> {/*class*/}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Tempore aliquid numquam sed suscipit laborum! Autem ex molestias 
        perferendis obcaecati porro?
      </p>

      <label htmlFor="myInput"> {/*for*/}
        name
        <input id="myInput" />
      </label>

      <h2>{`isim ${name}, soy isim ${surname}`}</h2>

      <h2>{isLoggedIn ? `adim ${name}, soy adim ${surname}` : `giris yapilmadi`}</h2>

      <h3>Probs bölümü</h3>

      <User 
        name="Ali" 
        surname="Bal" 
        // isLoggedIn={true} 
        age="42"
        friends={["Ahmet", "Mehmet", "Ali", "Ayse"]}
        address={{
          title: "Giresun/Merkez",
          zip: 28000
        }}
      />
    </>
  );
}

export default App;