import axios from "axios";

const apiKey = "AIzaSyB-tT2A8b6FOCVd4vYajoDrXiiY-UNfvQs";

const callGeminiAPI = async (ask: string) => {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
  const data = {
    contents: [
      {
        parts: [{ text: ask }],
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        key: apiKey,
      },
    });
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini API çağrısında hata:", error);
    if (error instanceof Error) {
      return error.message;
    }
  }
};

export default callGeminiAPI;
