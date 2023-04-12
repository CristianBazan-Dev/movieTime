import express from 'express';
import cors from 'cors'; 
import {json} from 'express'; 
import dotenv from 'dotenv'

dotenv.config()


const app = express(); 
app.use(express.json())
app.use(cors())

// Routes import
import moviesRoutes from './routes/moviesRouter.js'

// Routes
app.use('/api', moviesRoutes); 

// Server
const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log("Server on port 5000")
})

