const { request } = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const movieKey = process.env.MOVIE_KEY;

class MovieController {
  static async getMovie(req, res, next) {
    try {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieKey}`;
      const movie = await axios.get(url);
      //   console.log(movie);
      res.status(200).json({ data: movie.data });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MovieController;
