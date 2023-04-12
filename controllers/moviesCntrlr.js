import axios from 'axios'

export const getMovies = async(req, res) => {
    try{
        const api_key  = process.env.api_key
        const access_token = process.env.access_token
        console.log(api_key)

        const resMovies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}>&language=es-ES`, {
            headers: {Authorization: `Bearer ${access_token}`}
        }, {
            headers: 'Content-Type: application/json;charset=utf-8'
        })
        console.log(resMovies.data.total_pages)

        res.json(resMovies.data)

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
