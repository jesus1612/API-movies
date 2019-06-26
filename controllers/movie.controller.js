const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const url = 'https://api.themoviedb.org/3/movie/';

exports.getMovieForID = async (req, res)=>{
    const movie = await axios.get(url + req.params.id,
      {
        params: 
          {
            'api_key': process.env.API_KEY,
          },
      });
    res.send(movie.data);
};

exports.getRecomendationsForID = async (req, res) => {
  const recommendations = await axios.get(url + req.params.id + '/recommendations', 
    { params: { 'api_key': process.env.API_KEY } },
  );
  res.send(recommendations.data);
};