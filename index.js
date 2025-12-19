import { config } from "dotenv";
config();
import {PromptTemplate} from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
});

const template = PromptTemplate.fromTemplate(`
    explain {topic} in very simple way like ELI5,
    make sure to inculde the core conscepts and avoide unnecessary jargon,
    make the answe consis as possible and to the point
    `)


template.pipe(model).invoke({topic:"can you search a dtail about a github id which in 'alokishere' , tell me the detail"}).then(res =>{
    console.log(res.content)
})
