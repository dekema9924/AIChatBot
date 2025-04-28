const { GoogleGenerativeAI } = require("@google/generative-ai");

const googleGenAi = async (req, res) => {
    const { text } = req.body;
    console.log("User input:", text);

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    try {
        // Start a chat session
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Hello" }],
                },
                {
                    role: "model",
                    parts: [{ text: "Great to meet you. What would you like to know?" }],
                },
            ],
        });

        // Send the user's message to Gemini
        const response = await chat.sendMessage(text);
        const botReply = response.response.text();

        // console.log("Bot response:", botReply);
        res.status(200).json({ reply: botReply });

    } catch (error) {
        console.error("Error in Gemini API:", error);
        res.status(500).json({ error: "Failed to get response from AI" });
    }
};

module.exports = googleGenAi;