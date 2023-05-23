// Import the api module.
import * as api from "../api/index";

// Define the askQuestion function.
export const askQuestion = (questionData, navigate) => async (dispatch) => {
  // Try to post a question to the api.
  try {
    // Get the data from the api.
    const { data } = await api.postQuestion(questionData);

    // Dispatch an action with the type "POST_QUESTION" and the payload data.
    dispatch({ type: "POST_QUESTION", payload: data });

    // Fetch all questions.
    dispatch(fetchAllQuestions());

    // Navigate to the home page.
    navigate("/");
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the fetchAllQuestions function.
export const fetchAllQuestions = () => async (dispatch) => {
  // Try to get all questions from the api.
  try {
    // Get the data from the api.
    const { data } = await api.getAllQuestions();

    // Dispatch an action with the type "FETCH_ALL_QUESTIONS" and the payload data.
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the deleteQuestion function.
export const deleteQuestion = (id, navigate) => async (dispatch) => {
  // Try to delete a question from the api.
  try {
    // Delete the question from the api.
    await api.deleteQuestion(id);

    // Fetch all questions.
    dispatch(fetchAllQuestions());

    // Navigate to the home page.
    navigate("/");
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the voteQuestion function.
export const voteQuestion = (id, value) => async (dispatch) => {
  // Try to vote for a question on the api.
  try {
    // Vote for the question on the api.
    await api.voteQuestion(id, value);

    // Fetch all questions.
    dispatch(fetchAllQuestions());
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the postAnswer function.
export const postAnswer = (answerData) => async (dispatch) => {
  // Try to post an answer to a question on the api.
  try {
    // Get the data from the api.
    const { id, noOfAnswers, answerBody, userAnswered } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered
    );

    // Dispatch an action with the type "POST_ANSWER" and the payload data.
    dispatch({ type: "POST_ANSWER", payload: data });

    // Fetch all questions.
    dispatch(fetchAllQuestions());
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};

// Define the deleteAnswer function.
export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  // Try to delete an answer from the api.
  try {
    // Delete the answer from the api.
    await api.deleteAnswer(id, answerId, noOfAnswers);

    // Fetch all questions.
    dispatch(fetchAllQuestions());
  } catch (error) {
    // Log the error.
    console.log(error);
  }
};
