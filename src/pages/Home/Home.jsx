import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">

        <Sidebar />
        <div className="flex-1 ">
          <Hero />
        </div>
      </div>
    </>
  );
};