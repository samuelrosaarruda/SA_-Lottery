const geradorDeNumeros = async (req, res) => {
    const { quantidadeNumero } = req.body;

    try {
        if (!quantidadeNumero) {
            return res.status(400).json({ mensagem: 'Forneça a quantidade números para gerar o sorteio' });
        }
        const numeros = [];
        for (let i = 1; i <= quantidadeNumero; i++) {
let numeroSorteado = Math.floor(Math.random() * 60);
if(numeroSorteado === 0){
i-=1
}
            numeros.push(numeroSorteado)
        }
        return res.json({ "Os números selecionados são": numeros });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
}
module.exports = geradorDeNumeros