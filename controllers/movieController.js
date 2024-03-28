import { Movies } from "../models/movies.js";  

// Controllerfuncties
export default function (app) {
  app.get("/movies/:id", async (req, res) => {
    let id = req.params.id;
    console.log('id', id)
    try {
      const movie = await Movies.findById(id);
      if (!movie) return res.status(404).send("Movie not found");
      res.status(200).json(movie);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching movie");
    }
  });

  app.get("/movies", async (req, res) => {
    try {
      const allMovies = await Movies.find();
      res.status(200).json(allMovies);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching movies");
    }
  });
}
