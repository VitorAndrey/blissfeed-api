import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function sendGptAMessage(userMessage: string) {
  const data = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 1,
    messages: [
      {
        role: 'system',
        content:
          "Use the following step-by-step instructions to respond to user inputs. Step 1 - Respond in a JSON format as follows: '{\n'postable': false,\n 'response': 'the response goes here'\n}'. Step 2 - Evaluate if the last message is offensive in any way, then ONLY if NOT offfensive set the 'postable' key to true. 3 Step anwser in the same language the user talked to you with. Step 4 - Answer the user as a texting message from a close friend, always being understanding even towards offensive inputs. Offer support and guidance, setting the 'response' key with your reply.",
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
    stream: false,
  });

  if (!data.choices[0].message.content) throw new Error('Chat Gpt Error');

  return data.choices[0].message.content;
}
