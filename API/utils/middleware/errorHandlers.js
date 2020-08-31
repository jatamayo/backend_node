const { config } = require('../../config');
const { boom } = require('@hapi/boom');

function withErrorStack(error, stack) {
    if (config.dev) {
        return { ...error, stack };
    }
    return error;
}

function logErrors(error, req, res, next) {
    console.log(error);
    next(error);
}

function wrapError(error, req, res, next) {
    if (!error.isBoom) {
        next(boom.badImplementation(error));
    }
    next(error);
}

function errorHandler(error, req, res, next) {
    const { output: { statusCode, payload } } = error;
    res.status(statusCode);
    res.json(withErrorStack(error.message, error.stack));
}

module.exports = {
    logErrors,
    errorHandler,
    wrapError
}