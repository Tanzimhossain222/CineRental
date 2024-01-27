import { useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darktheme, setDarkTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darktheme, setDarkTheme }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
