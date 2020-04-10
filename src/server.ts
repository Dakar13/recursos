// 
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use('*', cors());
app.use(compression());

app.get('/', (req, res) => {
    res.send('Bienvenido a la Academia Online de Graphql');
});

const httpServer = createServer(app);
const PORT = 5200

httpServer.listen({
    port: PORT
},

    () => console.log(`Servidor de Academia Online ejecutando en http://localhost:${PORT}`)

);
