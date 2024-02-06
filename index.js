const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


const test = require('./endpoints/test');
app.get('/', test);


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
// Listen on port
app.listen(PORT, () => {
    console.log(`Server Is running on port ${PORT}`);
});

return { app };
