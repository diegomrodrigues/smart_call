const axios = require('axios')

const openAi = axios.create({
    baseURL: 'https://api.openai.com/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
})

async function chatCompletion(prompt) {
    return openAi.post('/v1/chat/completions', prompt)
}

module.exports = {
    chatCompletion
}