const openAi = require('./utils/openai')
const Cart = require('./models/Cart')

const SYSTEM_MESSAGE = `
Você é uma API com o objetivo de criar uma chamada para ação (Call to Actions - CTAs) 
para cada produto no carrinho de compras fornecido. Estas chamadas para ação devem incorporar:
* serem breves e rápidas de ler otimizadas para uso mobile;
* técnicas de personalização criando uma conexão direta com o cliente; 
* utilizar estratégias de urgência e escassez para incentivar ações imediatas; 
* destacar os benefícios claros dos produtos para persuadir eficazmente. 

Lembre-se de responder no formato JSON, focando em abordagens que aumentem a probabilidade 
de conversão de vendas, mantendo a autenticidade e alinhamento com a voz da marca.

Formato de Resposta JSON:
{ ctas: [ { product: 'nome do produto', cta: 'texto do cta' } ] }
`

const OPENAI_MODEL = 'gpt-3.5-turbo-1106'

function createPrompt(cart) {
    return {
        model: OPENAI_MODEL,
        messages: [
            {role: "system", content: SYSTEM_MESSAGE},
            {role: "user", content: cart.toString()}
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