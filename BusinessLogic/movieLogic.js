import { Movies } from "../models/movies.js";

export default function () {
  async function getMovieById(id) {
    try {
      const movie = await Movies.findById(id);
      return movie;
    } catch (error) {
      throw new Error("Error fetching movie");
    }
  }

  async function getAllMovies() {
    try {
      const allMovies = await Movies.find();
      return allMovies;
    } catch (error) {
      throw new Error("Error fetching movies");
    }
  }

  return {
    getMovieById,
    getAllMovies
  };
}
