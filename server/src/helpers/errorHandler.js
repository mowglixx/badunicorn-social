const defaultError = {status: 404, message: 'Not Found'}

const handleError = (statusCode = 404, errorMessage = 'Not Found') => ({
        statusCode: statusCode,
        error: errorMessage,
        image: `https://http.cat/${statusCode}`
    })

module.exports = handleError