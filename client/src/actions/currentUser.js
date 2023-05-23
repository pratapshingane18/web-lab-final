// Define the setCurrentUser function.
export const setCurrentUser = (data) => {
  // Return an action with the type "FETCH_CURRENT_USER" and the payload data.
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};
