import React from "react";
import Form from "../Components/Form";
import { useGlobalStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useGlobalStates();
  return (
    <div className={state.theme}>
      <div className="form">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you.</p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
