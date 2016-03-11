const restify = require( 'restify' );
const request = require( 'superagent' )

const weatherAnalyzer = require( './weatherAnalyzer' )

const ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=b1b15e88fa797225412429c1c50c122a&q='

function weatherEndpoint( req, res, next ) {
  request
    .get( ENDPOINT + req.params.loc )
    .send()
    .set( 'Accept', 'application/json' )
    .end( function( err, data ) {
      const parsedData = data.body.list.map( temperatureData => {
        return [
          temperatureData.dt,
          temperatureData.main.temp
        ]
      } )
      const isTemeperatureIncreasing = weatherAnalyzer.isTemeperatureIncreasing( parsedData )
      res.send( {
        result: isTemeperatureIncreasing
      } )
      next()
    } );
}

const server = restify.createServer();
server.get( '/weather', weatherEndpoint );

server.listen( 8080, function() {
  console.log( '%s listening at %s', server.name, server.url );
} );
