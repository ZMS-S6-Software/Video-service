import movieLogic from '../BusinessLogic/movieLogic.js';
const movieService = movieLogic();

export default function (app) {
  app.get("/movies/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const movie = await movieService.getMovieById(id);
      if (!movie) return res.status(404).send("Movie not found");
      res.status(200).json(movie);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching movie");
    }
  });
  
  app.get("/movies", async (req, res) => {
    try {
      const allMovies = await movieService.getAllMovies();
      res.status(200).json(allMovies);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching movies");
    }
  });
}
