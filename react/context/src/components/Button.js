import { useTheme } from '../context/ThemeContext';
// import { useContext } from 'react'
// import ThemeContext from "../context/ThemeContext"; ilgili bolumde yapilan kisaltma sayesinde kullanim sadelesti.

function Button() {
  // const data = useContext(ThemeContext);
  const data = useTheme();
  console.log(data);
  return (
    <div>
      Active Theme: {data.theme}
      <br />
      <button onClick={() => data.setTheme(data.theme === "light" ? "dark" : "light")}>Change thema</button>
    </div>
  )
}

export default Button;