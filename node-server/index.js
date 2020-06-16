require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const app = express();
app.use(cors());

const url = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0-onasa.mongodb.net/japflash?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}, (err) => {
  (!err) ? console.log('Connected successfully to database') : console.log(`Cannot connect to database due to ${err}`);
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use('/', (req,res) => {
  res.send('Welcom to JapFlash');
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});