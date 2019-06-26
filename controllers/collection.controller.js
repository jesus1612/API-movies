const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const url = 'https://api.themoviedb.org/3/collection/';

exports.getCollectionForID = async (req, res)=>{
    const collection = await axios.get(url + req.params.id,
      {
        params: 
          {
            'api_key': process.env.API_KEY,
          },
      });
    res.send(collection.data);
};

exports.getImageCollectionForId = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const imageCollection = await axios.get(url + id + '/images',
    {
      params:
        {
          'api_key': process.env.API_KEY,
        }
    });
    res.send(imageCollection.data);
}

exports.getTranslationsCollectionForId = async (req, res) => {
  const id = req.params.id;
  const imageCollection = await axios.get(url + id + '/translations',
    {
      params:
        {
          'api_key': process.env.API_KEY,
        }
    });
    res.send(imageCollection.data);
}