"use client";

import "./App.css";
import Header from "@/components/Header";
import Trending from "@/components/Trending";
import HappeningNow from "@/components/HappeningNow";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Header className="mb-8" />
      <div className="container mx-auto px-4 mb-8">
        <Trending className="w-full" />
        <HappeningNow className="mb-8" />
      </div>
      <Footer />
    </>
  );
}

export default App;
