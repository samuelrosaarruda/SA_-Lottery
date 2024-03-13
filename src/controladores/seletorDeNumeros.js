const geradorDeNumeros = async (req, res) => {
    const { quantidadeNumero } = req.body;

    try {
        if (!quantidadeNumero) {
            return res.status(400).json({ mensagem: 'Forneça a quantidade números para gerar o sorteio' });
        }
        const numeros = [];

        for (let i = 1; i <= quantidadeNumero; i++) {
            let numeroSorteado = Math.floor(Math.random() * (60 - 1 + 1)) + 1;

            let numeroEncontrado = numeros.includes(numeroSorteado);

            if (numeroEncontrado) {
                i -= 1;
            }
            else {
                numeros.push(numeroSorteado)
            }
        }
        return res.json({ 'Os números sorteados são': numeros });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
}
module.exports = geradorDeNumeros