const express = require('express');
const app = express();

// Serve static files from public folder
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send();
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
});