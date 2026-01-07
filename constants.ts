
import { BookInfo } from './types';

export const PASSWORD_KEY = "pudding";

export const BOOK_METADATA: BookInfo = {
  title: "Milo and Madi",
  authors: ["Chris Bailey", "Joseph Bailey"],
  contactEmail: "crsbailey@gmail.com",
  links: {
    draft: "https://example.com/draft.pdf",
    proposal: "https://example.com/proposal.pdf"
  },
  summary: "A charming graphic novel that follows the adventures of two young teeth, Milo and Madi, as they navigate the ups and downs of life in the Mouth, dealing with things like sugar rushes, flossing monsters, and the inevitable visit from the Tooth Fairy."
};

export const SYSTEM_INSTRUCTION = `
You are the AI Pitch Assistant for the graphic novel 'Milo and Madi: A Tooth Story' by Chris Bailey and Joseph Bailey.
Your goal is to help literary agents and publishers understand the project.
Key themes: Oral hygiene for kids (made fun), friendship, coming of age, adventure.
Target audience: Middle-grade readers (8-12).
Tone: Humorous, vibrant, educational but not preachy.
Characters: Milo (adventurous, slightly reckless incisor) and Madi (thoughtful, protective molar).
If asked about details not in the summary, emphasize that it's a 'character-driven adventure that makes dental health an epic journey'.
Be professional, enthusiastic, and helpful. Keep responses concise.
`;
