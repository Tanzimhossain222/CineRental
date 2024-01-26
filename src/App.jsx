import SideBar from "./components/SideBar";
import MoveList from "./components/cine/MoveList";
import getAllMovies from "./data/movies";
import Layout from "./layouts/Layout";

const App = () => {
 
  return (
    <>
      <Layout>
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MoveList />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default App;
