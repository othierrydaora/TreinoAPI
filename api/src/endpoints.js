import { Router } from 'express';
import { table, corPrimaria, dobro, media, soma, ingresso, characterFreq, maior, febre } from "./services.js";


const server = Router()


server.get('/dobro/:numero', (req, resp) => {
    try {
        resp.send(dobro(req.params.numero));        
    } catch (err) {
        resp.status(400).send(`Erro: ${err.message}`);
    }
}); //ok

server.get('/somar', (req, resp) => {
    try {
        resp.send(soma(req.query.numeroUm, req.query.numeroDois));
    } catch (err) {
        resp.status(400).send(`Erro: ${err.message}`);
    }
}); //ok

server.post('/media', (req, resp) => {
    try {
        const numUm = Number(req.body.numUm);
        const numDois = Number(req.body.numDois);
        const numTres = Number(req.body.numTres);

        resp.send({
            "media": media(numUm, numDois, numTres)
        });
    } catch (err) {
        resp.status(400).send(`Erro: ${err.message}`);
    }
}); //ok

server.get('/febre/:temperatura', (req, resp) => {
    try {
        resp.send({
            "febrio": febre(req.params.temperatura)
        });
    } catch (err) {
        resp.status(400).send({
            "Erro": err.message
        });
    }
}); //ok

server.get('/tabuada/:limite', (req, resp) => {
    try {
        resp.send({
            "tabuada": table(req.params.limite)
        });
    } catch (err) {
        resp.status(400).send({
            "Erro": err.message
        });
    }
}); //ok

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    try {
        resp.send({
            "primaria": corPrimaria(req.params.cor)
        });
    } catch (err) {
        resp.status(400).send({
            "Erro": err.message
        });
    }
}); //ok


server.post('/ingresso', (req, resp) => {
    try {
        const { inteiras, meias, dia, origem } = req.body;
        resp.send({
            "total": ingresso(inteiras, meias, dia, origem)
        });
    } catch (err) {
        resp.status(400).send({
            "Erro": err.message
        });
    }
}); //ok

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {
    try {
        const texto = req.params.texto;
        const caractere = req.params.caractere;
        resp.send({
            "frequencia": characterFreq(texto, caractere)
        });
    } catch (err) {
        resp.status(400).send({
            "Erro": err.message
        });
    }
}); //ok

server.post('/dia2/maior', (req, resp) => {
    try {
        const arr = req.body.numeros;
        resp.send({
            "maior": maior(arr)
        });
    } catch (err) {
        resp.status(400).send({
            "Erro": err.message
        });   
    }
}); //ok

export default server;