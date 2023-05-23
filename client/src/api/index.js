// Import the axios library.
import axios from "axios";

// Create an instance of the axios client.
const API = axios.create({
  baseURL: "https://stack-extra-overflow-pratap-shingane.netlify.app/",
});

// Add an interceptor to add the authorization header to all requests.
API.interceptors.request.use((req) => {
  // Check if the user is logged in.
  if (localStorage.getItem("Profile")) {
    // Get the user token.
    const token = JSON.parse(localStorage.getItem("Profile")).token;

    // Add the authorization header to the request.
    req.headers.authorization = `Bearer ${token}`;
  }

  // Return the request.
  return req;
});

// Define the logIn function.
export const logIn = (authData) => API.post("/user/login", authData);

// Define the signUp function.
export const signUp = (authData) => API.post("/user/signup", authData);

// Define the postQuestion function.
export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);

// Define the getAllQuestions function.
export const getAllQuestions = () => API.get("/questions/get");

// Define the deleteQuestion function.
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);

// Define the voteQuestion function.
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, { value });

// Define the postAnswer function.
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });

// Define the deleteAnswer function.
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

// Define the getAllUsers function.
export const getAllUsers = () => API.get("/user/getAllUsers");

// Define the updateProfile function.
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
