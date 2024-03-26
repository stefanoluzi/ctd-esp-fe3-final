import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});

  // Capturamos el ID de la URl
  const params = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url).then((res) => setDentist(res.data));
  }, []);

  console.log(dentist);

  return (
    <>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {/* <div>
        <h1>Dentist's Detail </h1>
        <div className="card">
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Telefono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      </div> */}
        <h1>Dentist's Detail {dentist.id} </h1>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </table>
    </>
  );
};

export default Detail;
