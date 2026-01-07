
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class GeminiService {
  /**
   * Sends a message to the Gemini API using history for context.
   */
  async sendMessage(prompt: string, history: { role: 'user' | 'model', text: string }[]) {
    try {
      // Fix: Always use new GoogleGenAI({apiKey: process.env.API_KEY}) directly.
      // Fix: Create the instance inside the method to ensure it uses the most up-to-date key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // Fix: Use ai.models.generateContent to query GenAI with both the model name and prompt/history.
      // This is preferred for text answers to ensure history is correctly applied in a stateless service call.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      // Fix: Access .text property directly (not as a method call) to get the generated response.
      return response.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm having trouble connecting to my creative lobes right now. Please try again or check the proposal document directly.";
    }
  }
}

export const geminiService = new GeminiService();
