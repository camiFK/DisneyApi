import express from 'express'
import morgan from "morgan";
import cors from 'cors'

import characterRoutes from './routes/character.routes.js'
import movieRoutes from './routes/movies.routes.js'

const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));

app.use(characterRoutes)
app.use(movieRoutes)

export default app;