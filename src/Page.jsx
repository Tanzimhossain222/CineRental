import SideBar from "./components/SideBar";
import MoveList from "./components/cine/MoveList";
import { useTheme } from "./context";
import Layout from "./layouts/Layout";

const Page = () => {
  const { darktheme } = useTheme();

  return (
    <>
    <div className={`h-full w-full ${darktheme ? 'dark': '' }` }>

   
      <Layout>
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MoveList />
          </div>
        </main>
      </Layout>
      </div>
    </>
  );
};

export default Page;
