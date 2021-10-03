import { success, error } from 'signale';
import { port } from './config.json';
import { createConnection } from "typeorm";
import express from 'express';
const app = express();
import apiRoutes from './routes/api';


(async () => {
    try {
        await createConnection().then(async (conn) => {
            await conn.synchronize();
        });
        success("Connected to Database successfully.")
    } catch{
        error("Connection to database failed. Please check your credentials.")
    }

})();

console.clear();

app.use(express.json())
app.use('/api', apiRoutes)

app.listen(port, () => {
    success(`Listening at https://localhost:${port}`);
});

