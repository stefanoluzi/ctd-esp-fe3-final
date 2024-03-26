export const reducer = (state, action) => {
  switch (action.type) {
    
    case "GET_LIST":
      return { ...state, dentistList: action.payload };
    
      case "GET_RECIPE":
      return { ...state, dentistSelected: action.payload };

      case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }; // Toggle theme between light and dark

      case "ADD_FAV":
      // return { ...state, favs: [...state.favs, action.payload] };

      // Chequeo si favs con el mismo ID existe
      if (state.favs.some((fav) => fav.id === action.payload.id)) {
        // Si ya existe, retorno el estado sin modificarlo.
        return state;
      } else {
        // Si no existe, lo agrego al array.
        return { ...state, favs: [...state.favs, action.payload] };
      }

    case "DELETE_FAV":
      // Realizar una operación utilizando .filter()
      const updatedFavs = state.favs.filter((fav) => fav.id !== action.payload);
      localStorage.setItem("favs", JSON.stringify(updatedFavs)); // Update local storage
      return { ...state, favs: updatedFavs };
      
    default:
      return state;
  }
};
