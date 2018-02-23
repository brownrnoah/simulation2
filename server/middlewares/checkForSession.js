module.exports = function( req, res, next ) {
    const { session } = req;
  
    if ( !session.user ) {
      session.user = {
        username: "",
        password: "",
        userId: 0 };
    }    
    next();
  };