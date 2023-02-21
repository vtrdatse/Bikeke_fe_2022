/**
 * code:response code (int)
 * data: response data (array or object)
 * message : response message (string)
 * error : error (true or false)
 */
const responseBase = function (
    responseCode,
    responseData,
    responseMessage,
    responseError,
) {
    const code = responseCode;
    const data = responseData;
    const message = responseMessage;
    const error = responseError;
    return { code, data, message, error };
};
