const express = require('express');
const app = express();
const PORT = 3000;

// Middleware per permettere all'API di leggere ed elaborare dati in formato JSON
app.use(express.json());

// Rotta di test (Endpoint base)
app.get('/', (req, res) => {
    res.json({ 
        status: "OK",
        message: "Benvenuto nell'API di Hajime no Ippo! Inizia il round." 
    });
});

// Avvio del server in ascolto
app.listen(PORT, () => {
    console.log(`Palestra Kamogawa aperta: server in ascolto su http://localhost:${PORT}`);
});