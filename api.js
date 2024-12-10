const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const apiUrl = 'https://api.dexscreener.com/latest/dex/tokens/0xc0ba93a810adb498900c82bb6f7c16ca3046dfa7b6f364ec985595fdeb1ee9ad::suimon::SUIMON';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch token data' });
    }
};
