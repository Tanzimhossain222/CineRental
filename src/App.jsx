import { useState } from "react";
import SideBar from "./components/SideBar";
import MoveList from "./components/cine/MoveList";
import { MovieContext } from "./context";
import getAllMovies from "./data/movies";
import Layout from "./layouts/Layout";

const App = () => {
  const [cartData, setCartData] = useState([]);
  
  return (
    <>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <Layout>
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <SideBar />
              <MoveList />
            </div>
          </main>
        </Layout>
      </MovieContext.Provider>
    </>
  );
};

export default App;
