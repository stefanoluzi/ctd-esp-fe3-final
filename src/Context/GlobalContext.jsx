import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";

const GlobalStates = createContext();

const initialState = {
  dentistList: [],
  dentistSelected: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  //Default theme
  theme: "light",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

  const url = "https://jsonplaceholder.typicode.com/users";

  //USE EFFECT API: GET LIST
  useEffect(() => {
    //Llamado a la API
    axios(url).then((res) => dispatch({ type: "GET_LIST", payload: res.data }));
  }, []);

  //USE EFFECT SAVE FAVS IN LOCAL STORAGE
  useEffect(() => {
    //Envío a LS
    // Prevent adding the same id item to local storage
    //const uniqueFavs = [...new Set(state.favs.map((fav) => fav.id))];
    localStorage.setItem("favs", JSON.stringify(state.favs));
    // alert("Dentist added successfully");
  }, [state.favs]);

  //ALERT when adding to favs.
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      alert("Dentist added successfully");
      setShowAlert(false); // Reset showAlert after showing alert
    }
  }, [showAlert]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" }); // Dispatch action to toggle theme
  };

  return (
    <GlobalStates.Provider
      value={{ state, dispatch, setShowAlert, toggleTheme }}
    >
      {children}
    </GlobalStates.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);
