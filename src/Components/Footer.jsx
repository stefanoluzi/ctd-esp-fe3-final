import React, { useContext } from "react";
import { useGlobalStates } from "../Context/GlobalContext";

const Footer = () => {
  
  const { state} = useGlobalStates();
  
  return (
    <footer className={state.theme}>
      <p>Powered by</p>
      <img src="./images/DH.png" alt="DH-logo" />

      
    </footer>
    
  );
};

export default Footer;
