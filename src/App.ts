import express, { Request, Response } from 'express';
import helmet from 'helmet';
import connectorDB from './Helper/Dbconnector'
import cors from "cors";
import { DB_CONNECION, SERVER_PORT } from './Helper/Core/Config';
import bodyParser from 'body-parser';

const app = express();

app.use((req: Request, res: Response, next) => {
    next();
});

app.get('/api/success', (req, res) => {
    res.status(200).json({
        data: 'server running or not check api endpoint'
    });
});

app.use(bodyParser.urlencoded({ limit: "200mb", extended: false }));

app.use(helmet())
app.use(cors());


app.use(bodyParser.json({ limit: "200mb" }));
const dbConnectionString: string = DB_CONNECION ?? ''

connectorDB(dbConnectionString)

const port = SERVER_PORT || 1000
app.listen(port, () => {
    console.log(`Application started on ${port}...`)
})

export default app
