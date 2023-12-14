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
                try {
                    if (response.data.choices.length === 0) {
                        throw new Error(`Error while calling openai api ${JSON.stringify(response.data)}`)
                    }

                    const message = response.data.choices[0].message
                    const content = JSON.parse(message.content)

                    resolve(content)
                } catch (error) {
                    reject(error)
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = {
    chatCompletion
}