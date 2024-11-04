import axios from "axios";

const apiKey = "AIzaSyAuACgTX4FvpMLOJTta8x7Htc8ajxQqXy0";

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
    throw error;
  }
};

export default callGeminiAPI;