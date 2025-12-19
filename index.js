import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
});

model.invoke("Hello, what can you do?").then((res) => {
    console.log(res.content)
});
