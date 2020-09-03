const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock} = require('../utils/mocks/movies.js');

const testServer = require('../utils/testServer');

//******************************************************************************* */
describe('routes - movies', function(){
    const ROUTE = proxyquire('../routes/movies',{
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(ROUTE);
    describe('GET/movies', function(){
        
        it('should responde with status 200', function(done){
            request.get('/api/movies').expect(200, done);
        })

        it('should respond with the list of movies', function(done){
            request.get('/api/movies').end((error, response)=>{
                assert.deepEqual(response.body, {
                    data: moviesMock,
                    message: 'peliculas listadas'
                })
                done();
            })
        })

    })
})