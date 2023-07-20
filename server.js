

const express = require('express');

// EXPRESS CONFIGURATION
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// The below points our server to a series of "route" files.

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});
