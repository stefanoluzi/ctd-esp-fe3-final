import React from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useGlobalStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useGlobalStates();

  // const [list, setList] = useState([]);
  // const url = "https://jsonplaceholder.typicode.com/users";

  // useEffect(() => {
  //   axios(url).then((res) => setList(res.data));
  // }, []);

  // console.log(list);

  // Funcion para manejar la eliminación de favs
  const handleDeleteFromFavs = (id) => {
    // Log de eliminacion
    alert(`Deleting item with id: ${id} from favorites`);
  };

  return (
    <main className={state.theme}>
        <h1>Home</h1>
      <div className="cardComplete">
        <div className="card-grid">
          {/* Aqui deberias renderizar las cards */}
          {state.dentistList.map((item) => (
            <Card key={item.id} item={item} onDelete={handleDeleteFromFavs} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;