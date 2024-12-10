const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/token-data', async (req, res) => {
    try {
        const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/0xc0ba93a810adb498900c82bb6f7c16ca3046dfa7b6f364ec985595fdeb1ee9ad::suimon::SUIMON');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch token data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));