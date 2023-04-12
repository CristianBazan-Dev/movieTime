import { Router } from 'express'; 
import { getMovies } from '../controllers/moviesCntrlr.js';


const router = Router(); 

router.get("/movies", getMovies);


export default router; 