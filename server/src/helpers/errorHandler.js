const defaultError = {status: 404, message: 'Not Found'}

const handleError = (statusCode = 404, errorMessage = 'Not Found') => ({
        statusCode: statusCode,
        errorMessage: errorMessage,
        image: `https://http.cat/${statusCode}`
    })

module.exports = handleError