// Importing Modules

import { success, error } from './Utils/logging';
import { port } from './config.json';
import { createConnection } from 'typeorm';
import express from 'express';
import apiRoutes from './routes/api';
import frontendRoutes from './routes/frontend';
import cookieParser from 'cookie-parser';
import { Database } from './Database';

// Database Initialisation and Syncing of Tables
(async () => {
    try {
        await console.clear();
        await createConnection().then(async (conn) => conn.synchronize());
        success('Connected to Database successfully.');
        await new Database().initialize();
    } catch {
        await console.clear();
        error('Connection to database failed. Please check your credentials.');
    }
})();

// Express Routes and Middleware Handling
const app = express();


app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/', frontendRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => success(`Listening at https://localhost:${port}`));
