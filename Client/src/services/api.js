import axios from "axios";

const API =
  "http://127.0.0.1:5000";

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