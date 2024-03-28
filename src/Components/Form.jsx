import React from "react";
import { useState } from "react";
import { useGlobalStates } from "../Context/GlobalContext";

const Form = () => {
  const { state } = useGlobalStates();
  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  //Aqui deberan implementar el form completo con sus validaciones
  const handleSubmit = (event) => {
    const isNameValid = nameValidation(contacto.nombre);
    const isMailValid = emailValidation(contacto.email);

    event.preventDefault();
    if (isNameValid & isMailValid) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const nameValidation = (nombre) => {
    const removeSpaces = nombre.trimLeft();
    if (removeSpaces.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  return (
    <div className={`form ${state.theme}`}>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo</label>
        <input
          type="text"
          onChange={(event) =>
            setContacto({ ...contacto, nombre: event.target.value })
          }
        />
        <label>Email de contacto</label>
        <input
          type="text"
          onChange={(event) =>
            setContacto({ ...contacto, email: event.target.value })
          }
        />
        <button className="btn">Enviar</button>
      </form>
      <div className="afterForm">
        {show && (
          <h4 className="okmsg">
            Gracias {contacto.nombre}, te contactaremos cuanto antes vía email.
          </h4>
        )}
        {err && (
          <p className="errmsg">
            Por favor, verifique su información nuevamente.
          </p>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Form;
