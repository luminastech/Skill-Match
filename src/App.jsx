import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] dark:bg-gray-950 dark:text-gray-50">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
