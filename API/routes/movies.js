const express = require('express');
const { moviesMock } = require('../utils/MOCK_DATA');

function moviesApi(app){
    const router = express.Router();

    app.use('/api/movies', router);

    router.get("/", async function(req, res, next){
        try{
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'peliculas listadas'
            })
        }catch(error){
            next(error);
        }
    })
    router.get("/:movieId", async function(req, res, next){
        try{
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                message: 'pelicula recuperada'
            })
        }catch(error){
            next(error);
        }
    })
    router.post("/", async function(req, res, next){
        try{
            const createMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createMovieId,
                message: 'pelicula creada'
            })
        }catch(error){
            next(error);
        }
    })
    router.put("/:movieId", async function(req, res, next){
        try{
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                message: 'pelicula actualizada'
            })
        }catch(error){
            next(error);
        }
    })
    router.delete("/:movieId", async function(req, res, next){
        try{
            const movieDeleted = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: movieDeleted,
                message: 'pelicula eliminada'
            })
        }catch(error){
            next(error);
        }
    })
}

module.exports = moviesApi;