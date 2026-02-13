// Endpoint to get stats
import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let data = [];
let localUrl = 'https://hk-azfn.onrender.com/';

// Counters for statistics
let urlShortenedCount = 0;
let requestCount = 0;

app.get('/stats', (req, res) => {
    res.json({
        urlShortenedCount,
        requestCount
    });
});

app.post('/shorten', (req, res) => {
    const { url } = req.body;
    const id = nanoid(5);
    const shortUrl = `${localUrl}${id}`;
    const siteData = {
        id: id,
        actualUrl: url,
        shortUrl: shortUrl,
    };
    data.push(siteData);
    urlShortenedCount++;
    res.send(shortUrl);
});

app.use((req, res, next) => {
    requestCount++;
    next();
});

app.get('/:nanoid', (req, res) => {
    const { nanoid } = req.params;

    const siteData = data.find((item) => item.id === nanoid);

    if (siteData) {
        res.redirect(siteData.actualUrl);
    } else {
        res.status(404).send('URL not found');
    }
})

app.listen('3000', () => {
    console.log('app is listening at port = 3000');
})
