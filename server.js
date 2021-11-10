const express = require('express');
const app = express();
const authRouter = require('./server/router/auth/authRouter.js')
const clothingRouter = require('./server/router/clothing/clothingRouter.js')
const outfitRouter = require('./server/router/outfit/outfitRouter.js')
const closetRouter = require('./server/router/closet/closetRouter.js')
const weatherRouter = require('./server/router/weather/weatherRouter.js')
const path = require('path');

const cors = require('cors');

const connect = require('./database/database.js');

app.use(express.static(path.join(__dirname, 'client/build')));


//middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); //allows us to send bigger image files
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/auth', authRouter)
app.use('/api/clothing', clothingRouter)
app.use('/api/outfit', outfitRouter)
app.use('/api/closet', closetRouter)
app.use('/api/weather', weatherRouter)



const port = process.env.PORT || 3001;

connect();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
