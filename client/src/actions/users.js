// Import the api module.
import * as api from "../api";

// Define the fetchAllUsers function.
export const fetchAllUsers = () => async (dispatch) => {
  // Try to get all users from the api.
  try {
    // Get the data from the api.
    const { data } = await api.getAllUsers();

    // Dispatch an action with the type "FETCH_USERS" and the payload data.
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the updateProfile function.
export const updateProfile = (id, updateData) => async (dispatch) => {
  // Try to update the profile for the user with the given id.
  try {
    // Get the data from the api.
    const { data } = await api.updateProfile(id, updateData);

    // Dispatch an action with the type "UPDATE_CURRENT_USER" and the payload data.
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};
