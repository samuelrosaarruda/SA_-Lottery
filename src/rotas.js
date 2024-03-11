const express = require('express');
const geradorDeNumeros = require('./controladores/seletorDeNumeros');

const rotas = express();

rotas.post('/', geradorDeNumeros);

module.exports = rotas
