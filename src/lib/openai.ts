import OpenAI from "openai";
// Api Key setup
// https://platform.openai.com/account/api-keys
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
