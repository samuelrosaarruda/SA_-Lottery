const geradorDeNumeros = async (req, res) => {
    const { quantidadeNumero } = req.body;

    try {
        if (!quantidadeNumero) {
            return res.status(400).json({ mensagem: 'Forneça a quantidade números para gerar o sorteio' });
        }
        const numeros = [];
        for (let i = 1; i <= quantidadeNumero; i++) {
            numeros.push(i)
        }
        return res.json({ "Os números selecionados são": numeros });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
}
module.exports = geradorDeNumeros