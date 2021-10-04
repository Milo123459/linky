import { success, error } from './Utils/logging';
import { port } from './config.json';
import { createConnection } from "typeorm";
import express from 'express';
const app = express();
import apiRoutes from './routes/api';
import frontendRoutes from './routes/frontend';


(async () => {  
    try {
        await console.clear();
        await createConnection().then(async (conn) => await conn.synchronize());
        success("Connected to Database successfully.")
    } catch{
        await console.clear();
        error("Connection to database failed. Please check your credentials.")
    }

})();


app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', frontendRoutes);

app.listen(port, () => success(`Listening at https://localhost:${port}`));

