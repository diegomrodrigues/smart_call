const axios = require('axios')

const openAi = axios.create({
    baseURL: 'https://api.openai.com/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
})

function chatCompletion(prompt) {
    return new Promise((resolve, reject) => {
        openAi.post('/v1/chat/completions', prompt)
            .then((response) => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = {
    chatCompletion
}