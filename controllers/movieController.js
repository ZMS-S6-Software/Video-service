import movieLogic from '../BusinessLogic/movieLogic.js';
import rabbitQueue from '../BusinessLogic/messageBroker.js';
const movieService = movieLogic();
const queueService = rabbitQueue();

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
  
  app.post("/movie", async (req, res) => {
    try {
      const testitem1 = 'test1';
      const testitem2 = 'test2';
      const queueData = {
        title: 'uploadedvideo',
        testitem1,
        testitem2
      };
      queueService.sendDataToQueue(JSON.stringify(queueData));

      res.status(201).json(queueData);
    } catch (error) {
      console.error(error);
      res.status(400).send("Error creating movie");
    }
  });
}
