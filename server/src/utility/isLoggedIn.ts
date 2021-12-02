function isLoggedIn(request:any, response:any, done:any) {
    if (request.session.userId) {
       return done();
    }
    
    response.status(401).send();
 };
export {isLoggedIn};