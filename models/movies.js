import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: Date,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: [String],
    type: String,
    tomatoes: {
        viewer: {
            fresh: Number
        },
        critic: {
            rotten: Number
        },
        lastUpdated: Date,
        num_mflix_comments: Number
    }
});

export const Movies = mongoose.model('Movies', movieSchema);