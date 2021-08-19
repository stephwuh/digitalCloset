const express = require('express');
const app = express();
const authRouter = require('./router/auth/authRouter.js')
const clothingRouter = require('./router/clothing/clothingRouter.js')
const outfitRouter = require('./router/outfit/outfitRouter.js')
const closetRouter = require('./router/closet/closetRouter.js')
const weatherRouter = require('./router/weather/weatherRouter.js')

const cors = require('cors');

const connect = require('./database/database.js');




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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
