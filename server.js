const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB conection successfulllll!');
  })
  .catch((error) => {
    console.log(error);
  });
//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
