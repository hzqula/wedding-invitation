import AyatSuci from "./components/AyatSuci";
import Hero from "./components/Hero";
import Inviting from "./pages/Inviting";
import React, { useState } from "react";
import Mempelai from "./components/Mempelai";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

function App() {
  const [invited, setInvited] = useState(true);
  const [guest, setGuest] = useState("");

  const changeInvited = (status) => {
    setInvited(status);
  };
  const guestName = (name) => {
    setGuest(name);
  };

  return (
    <>
      {invited ? (
        <Inviting changeInvited={changeInvited} guest={guestName} />
      ) : (
        <>
          <Hero guest={guest} />
          <AyatSuci />
          <Mempelai />
          <Detail />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
