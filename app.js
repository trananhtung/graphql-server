const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.nx9hd.mongodb.net/?retryWrites=true&w=majority', {
  dbName: 'graphql',
});
mongoose.connection.once('open', () => {
    console.log('connected to database!');
});

mongoose.connection.on('error', (err) => {
  console.log('error connecting to database', err?.message);
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
