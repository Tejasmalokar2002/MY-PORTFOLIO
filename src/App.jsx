import React, { useEffect, useState } from "react";
import Header from "./Header";
import MessageButton from "./MessageButton";
import Home from "./Home";
import ChakraSpinner from "./ChakraSpinner";
import About from "./About";
import ProjectsSection from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ProjectsSectionRevised from "./ProjectSectionRevised";
import Projects from "./Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);




  return (
    <>
      <Header />
      <Home />
      {/* <ChakraSpinner /> */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      <About/>
      <Projects/>
      {/* <ProjectsSectionRevised/> */}
      <Experience/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
