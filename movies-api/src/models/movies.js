// const api = require('../services/API');
// const data = require('./movies.json')
const data = require('./top5MoviesAssessement.json')

class Movies{
    getMovies=async ()=>{
        return await data;
    }
}

module.exports = new Movies();
