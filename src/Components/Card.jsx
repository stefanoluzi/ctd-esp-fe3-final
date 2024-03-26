import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates, } from "../Context/GlobalContext";
import { useState } from "react";

const Card = ({ item, onDelete }) => {
  const { state, dispatch, setShowAlert} = useGlobalStates();
  
  const favs = JSON.parse(localStorage.getItem("favs")) || [];
  const isAlreadyInFavs = favs.some((fav) => fav.id === item.id);
  const [addedToFavs, setAddedToFavs] = useState(isAlreadyInFavs);

  // Aqui iria la logica para agregar la Card en el localStorage
  const handleAddToFavs = () => {
    //Chequeo si el item ya se encuentra en el favs
    if (!isAlreadyInFavs) {
      dispatch({ type: "ADD_FAV", payload: item });
      setAddedToFavs(true);
      setShowAlert(true);
    }
  };

  const handleRemoveFromFavs = () => {
    dispatch({ type: "DELETE_FAV", payload: item.id });
    setAddedToFavs(false);
    onDelete(item.id); 
  };


  return (
    <div className={`card ${state.theme}`}>
      <Link to={`/detail/${item.id}`}>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <div className="cardDiv">
          <img className="doctorIMG" src="/images/doctor.jpg" alt="doctor" />
          <h3>{item.name}</h3>
          <h3>Username: {item.username}</h3>
          <h3>Id: {item.id}</h3>
        </div>
      </Link>

      {addedToFavs ? (
        <button onClick={handleRemoveFromFavs} className="removeFromFavs">
          🗑️
        </button>
      ) : (
        <button onClick={handleAddToFavs}>⭐</button>
      )}
    </div>
  );
};

export default Card;
