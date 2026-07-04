import axios from "axios";

const API =
  "https://online-quiz-app-kaay.onrender.com";

export const getQuestions =
  async () => {
    return await axios.get(
      `${API}/questions`
    );
  };

export const saveResult =
  async (data) => {
    return await axios.post(
      `${API}/submit`,
      data
    );
  };