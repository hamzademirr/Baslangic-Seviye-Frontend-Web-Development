import { useTheme } from '../context/ThemeContext';
// import { useContext } from 'react'
// import ThemeContext from "../context/ThemeContext"; ilgili bolumde yapilan kisaltma sayesinde kullanim sadelesti.

function Header() {
  // const data = useContext(ThemeContext);
  const data = useTheme();
  return (
    <div>
      Active Theme: {data.theme}
      <br />
      <button onClick={() => data.setTheme(data.theme === "light" ? "dark" : "light")}>Change theme</button>
    </div>
  )
}

export default Header