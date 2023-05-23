// Import the api, currentUser, and users modules.
import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";

// Define the signup function.
export const signup = (authData, navigate) => async (dispatch) => {
  // Try to sign up the user with the given authData.
  try {
    // Get the data from the api.
    const { data } = await api.signUp(authData);

    // Dispatch an AUTH action with the data.
    dispatch({ type: "AUTH", data });

    // Set the current user in localStorage.
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    // Fetch all users.
    dispatch(fetchAllUsers());

    // Navigate to the home page.
    navigate("/");
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the login function.
export const login = (authData, navigate) => async (dispatch) => {
  // Try to login the user with the given authData.
  try {
    // Get the data from the api.
    const { data } = await api.logIn(authData);

    // Dispatch an AUTH action with the data.
    dispatch({ type: "AUTH", data });

    // Set the current user in localStorage.
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    // Navigate to the home page.
    navigate("/");
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};
