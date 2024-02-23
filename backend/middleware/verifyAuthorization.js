
const verifyAuthorization = (req,res,next) => {

    const fullURL = 'https://' + req.headers.host + req.url;

    const query = url.parse(fullURL,true);

    console.log('headers: ', req.headers);
    console.log('body: ', req.body);
    console.log('params: ', req.params);
    console.log('query: ', query);

    next();
}

module.exports = verifyAuthorization;