const openAi = require('./utils/openai')
const Cart = require('./models/Cart')

const SYSTEM_MESSAGE = `
Você é uma api com objetivo de criar 5 call to actions para os conteúdos do carrinho de compras fornecidos.
Por favor, responda no formato JSON.
`

const OPENAI_MODEL = 'gpt-3.5-turbo-1106'

function createPrompt(cart) {
    return {
        model: OPENAI_MODEL,
        messages: [
            {role: "system", content: SYSTEM_MESSAGE},
            {role: "user", content: `Aqui está o conteúdo do carrinho: ${cart.toString()}`}
        ]
    }
}

async function createCallToAction(cart) {
    const prompt = createPrompt(cart)

    return await openAi.chatCompletion(prompt)
}

module.exports = {
    createCallToAction
}