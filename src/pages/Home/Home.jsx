import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { FilterBelowHero } from "../../components/FilterBelowHero/FilterBelowHero";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-col p-4">
          <Hero />
          <FilterBelowHero />
        </div>
        
      </div>
    </>
  );
};
