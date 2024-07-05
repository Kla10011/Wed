import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import morgan from 'morgan';
import debug from 'debug';


const uri = "mongodb+srv://admin:0000@cluster0.agcmx4a.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.set("views","./src/view");
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('sample_mflix'); // replace with your database name
        const collection = database.collection('comments'); // replace with your collection name
        const data = await collection.find({}).toArray();
        res.render('index', { data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data');
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});