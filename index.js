express = require( 'express' );
var app = express();
var PORT = process.env.PORT || 8080;

app.use( express.urlencoded( { extended: true } ));
app.use( express.json() );

const tables = [
    {
        name: "John",
        id: 1,
        email: "john@john.com",
        phone: 1234
    }
];

const waitlist = [
    {
        name: "Jeff",
        id: 2,
        email: "no@table.sadface",
        phone: 2345
    }
]

app.use( express.static( 'public' ));

app.get( '/', (req, res) => {
    res.send( 'Hello world!' );
})

app.get( '/reserve', (req, res) => {
    res.send( 'Reserve page' );
})

app.get( '/api/tables', (req, res) => {
    res.json( tables );
})

app.get( '/api/waitlist', (req, res) => {
    res.json( waitlist );
})

app.post( '/reserve', ( req, res ) => {
    console.log( req.body );
    if ( tables.length < 5 ) {
        tables.push( req.body );
        console.log( `Tables: `, tables );
        const responseObj = {
            hasTable: true,
            userData: req.body
        }
        res.json( responseObj );
    } else {
        waitlist.push( req.body );
        const responseObj = {
            hasTable: false,
            userData: req.body
        }
        res.json( responseObj );
        console.log( `Waitlist: `, waitlist )
    }
})

app.listen( PORT, function() {
    console.log( 'App listening on PORT ' + PORT );
})