const express = require('express');
const cors = require('cors')
const db = require('./models');

const PORT = 8080;
const ADMIN = "Admin";

db.sequelize
  .sync()
  .then((_: any) => {
    const app = express();
    app.use(express.json());
    app.use(cors())
    app.listen(PORT,
      () => console.log(`Server started at http://localhost:${PORT}/\nPress Ctrl C to kill the server execution`)
    );
  });
