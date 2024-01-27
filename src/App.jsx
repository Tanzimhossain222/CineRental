import { useReducer, useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darktheme, setDarkTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darktheme, setDarkTheme }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
