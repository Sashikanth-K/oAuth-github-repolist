import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiMessage = (await axios.get("/api")).data;
        setMessage(apiMessage);
      } catch (error) {
        setErrorMessage("WARNING: There is no connection with the API server!");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div>
        <Header name={"Home page"} />
      </div>
      <div className="flex  flex-grow overflow-y-auto">
        <div className="flex-col">
          <h1>content</h1>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
