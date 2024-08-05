const axios = require('axios');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/roast', async (req, res) => {
    const { username } = req.body;
    const apiKey = 'AIzaSyBYPW4SJOlMyg_rWmdzm7ziw_0rL8W6q2m';
    const modelId = 'gemini-1.5-flash'; // Ganti dengan ID model Gemini Anda

    try {
        const response = await axios.post(
            `https://api.gemini.google.com/v1/models/${modelId}/generate`,
            {
                prompt: `Roast Instagram user: ${username}`,
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json({ roast: response.data.generated_text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan dalam pemrosesan permintaan.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
