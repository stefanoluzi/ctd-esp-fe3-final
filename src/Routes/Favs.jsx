import React from "react";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { useGlobalStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalStates();
  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs")) || []);

  // useEffect para actualizar el estado de favs cuando se cambia el localStorage.
  useEffect(() => {
    const handleStorageChange = () => {
      setFavs(JSON.parse(localStorage.getItem("favs")) || []);
    };

    // Event listener cuando localStorage cambia
    window.addEventListener("storage", handleStorageChange);

    return () => {
      // Remover el event listener cuando se desmonta
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleDeleteFromFavs = (id) => {
    const updatedFavs = favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    setFavs(updatedFavs);
  };

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length > 0 ? (
          favs.map((dentist) => (
            <Card
              key={dentist.id}
              item={dentist}
              onDelete={() => handleDeleteFromFavs(dentist.id)}
            />
          ))
        ) : (
          <p>No hay dentistas favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
