const express = require('express');
const { moviesMock } = require('../utils/mocks/MOCK_DATA');
const MoviesService = require('../services/movies');
const {movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandlers');

function moviesApi(app) {
    const router = express.Router();

    app.use('/api/movies', router);
    const moviesService = new MoviesService();

    //**************************************************************************** */
    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            res.status(200).json({
                data: movies,
                message: 'peliculas listadas'
            })
        } catch (error) {
            next(error);
        }
    })

    //**************************************************************************** */
    router.get("/:movieId", validationHandler({ movieId: movieIdSchema}, 'params'),async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId });            
            res.status(200).json({
                data: movies,
                message: 'pelicula recuperada'
            })
        } catch (error) {
            next(error);
        }
    })

    //**************************************************************************** */
    router.post("/", validationHandler(createMovieSchema) ,async function (req, res, next) {
        const { body: movie } = req;
        try {
            const createMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                data: createMovieId,
                message: 'pelicula creada'
            })
        } catch (error) {
            next(error);
        }
    })

    //**************************************************************************** */
    router.put("/:movieId", validationHandler({ movieId: movieIdSchema}, 'params'),validationHandler(updateMovieSchema), async function (req, res, next) {
        const { body: movie } = req;
        const { movieId } = req.params;

        //**************************************************************************** */
        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
            res.status(200).json({
                data: updatedMovieId,
                message: 'pelicula actualizada'
            })
        } catch (error) {
            next(error);
        }
    })

    //**************************************************************************** */
    router.delete("/:movieId",validationHandler({ movieId: movieIdSchema}), async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movieDeleted = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: movieDeleted,
                message: 'pelicula eliminada'
            })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApi;