import cors from 'cors';
import express from 'express';
import placesRouter from './routes/places';
import tagsRouter from './routes/tagRoutes';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));

app.use(express.json());

//Mount the /places route
app.use('/api/places', placesRouter);
app.use('/api/tags', tagsRouter);

app.get('/', (_req, res) => {
    res.send('SpotRoulette Backend is live!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});