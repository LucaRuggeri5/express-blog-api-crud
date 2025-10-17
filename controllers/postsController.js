const ricette = require('../data/ricette');

function index(req, res) {
    res.json(ricette);
}

function show(req, res) {
    // recupero l'id e lo trasformo in numero
    const id = parseInt(req.params.id)
    // cerchiamo la ricetta tramite id
    const ricetta = ricette.find((a) => a.id === id);
    if (!ricetta) {
        res.status(404)
        return res.json({
            error: "Post non trovato",
            message: `La ricetta con non esiste`
        });
    }

    res.json(ricetta);
}

function store(req, res) {
    res.send('Creazione nuova ricetta');
}

function update(req, res) {
    res.send('Modifica totale della ricetta' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale della ricetta' + req.params.id);
}

function destroy(req, res) {
    // recupero l'id e lo trasformo in numero
    const id = parseInt(req.params.id)
    // cerchiamo le ricette tramite id
    const ricetta = ricette.find(a => a.id === id);
    if (!ricetta) {
        res.status(404);
        return req.json({
            status: 404,
            error: "Post non trovato",
            message: `La ricetta non esiste`
        })
    }
    ricette.splice(ricette.indexOf(ricetta), 1);
    console.log(ricette);
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy }