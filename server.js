const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
const uri = require('./config/keys').mongoURI;
MongoClient.
    connect(uri, {useUnifiedTopology: true,useNewUrlParser: true})
    .then(() => console.log('Db Connected'))
    .catch((err) => console.log(err));



app.get('/', (req, res) => res.send('Hello world'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));