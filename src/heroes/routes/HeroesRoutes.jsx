import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DC, Marvel, Search, Hero } from "../pages";

export const HeroesRoutes = () => {

  useEffect( () => {
    document.body.classList.add("resto");

    return () => {
      document.body.classList.remove("resto");
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<DC />} />

          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" replace/>} />
        </Routes>
      </div>
    </>
  );
};
