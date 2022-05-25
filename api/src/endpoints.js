import { Router } from 'express';
import { table, corPrimaria, dobro, media, soma, ingresso, characterFreq, maior, febre } from "./services.js";


const server = Router()


server.get('/dobro/:numero', (req, resp) => {
    resp.send(dobro(req.params.numero));
}); //ok

server.get('/somar', (req, resp) => {
    resp.send(soma(req.query.numeroUm, req.query.numeroDois));
}); //ok

server.post('/media', (req, resp) => {
    const numUm = Number(req.body.numUm);
    const numDois = Number(req.body.numDois);
    const numTres = Number(req.body.numTres);

    resp.send({
        "media": media(numUm, numDois, numTres)
    });
}); //ok

server.get('/febre/:temperatura', (req, resp) => {
    resp.send({
        "febrio": febre(req.params.temperatura)
    });
}); //ok

server.get('/tabuada/:limite', (req, resp) => {
    resp.send({
        "tabuada": table(req.params.limite)
    });
}); //ok

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    resp.send({
        "primaria": corPrimaria(req.params.cor)
    });
}); //ok


server.post('/ingresso', (req, resp) => {
    const { inteiras, meias, dia, origem } = req.body;
    resp.send({
        "total": ingresso(inteiras, meias, dia, origem)
    });
}); //ok

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {
    const texto = req.params.texto;
    const caractere = req.params.caractere;
    resp.send({
        "frequencia": characterFreq(texto, caractere)
    });
}); //ok

server.post('/dia2/maior', (req, resp) => {
    const arr = req.body.numeros;
    resp.send({
        "maior": maior(arr)
    });
}); //ok

export default server;