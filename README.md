
# Digital Closet

The main goal of Digital Closet is to help users dress stylishly. 
It aims to do so by allowing users to catalogue and organize their clothes digitally 
and by providing them with outfit recommendations based on the clothes they have in their digital closet. 

<img src="https://user-images.githubusercontent.com/56822167/138986771-0f67d3bd-28b2-402b-9c8f-9248ee65283d.PNG" width=500>
<img src="https://user-images.githubusercontent.com/56822167/138987006-10a92e3d-7a07-4db3-ae2c-a53cd652b391.PNG" width=500>
<img src="https://user-images.githubusercontent.com/56822167/138987036-6cb82293-e3de-473f-9e38-8d411e3cddc7.PNG" width=500>
<img src="https://user-images.githubusercontent.com/56822167/138987017-048de5e4-5bb2-4d0e-804a-14030900d4dc.PNG" width=500> 
<img src="https://user-images.githubusercontent.com/56822167/138987024-08ef7f6d-ea70-4fd1-b79e-03dd34c49ed6.PNG" width=500>


## Tech Stack

**Client:** React, Redux, Cloudinary

**Server:** Node, Express, Bcrypt, Sequelize ORM, PostgreSQL


## Features

- Upload and save images of clothes.
- Group images to form outfits and save for future reference. 
- Provides weather information to help plan outfits. 
- Provides outfit recommendations based on clothes in user's digital closet. 
- Mobile responsive.

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_WEATHERAPI_KEY`

`REACT_APP_ZENSERP_KEY`

`CLOUDINARY_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET`

`SEQUELIZE_DATABASE_USER_ID`

`SEQUELIZE_DATABASE_PW`

`SEQUELIZE_DATABASE_NAME`
## Installation

Below instructions are based on how I (the creator of the project) created the project in Windows.

1. Install Node.js, npm, and git if you haven't already. 

2. Clone the project into the directory of your choosing on your local machine. 

```bash
git clone https://github.com/stephwuh/digitalCloset.git
```

3. Install related dependencies while in project directory.  

```bash
npm install
```

4. Create .env file at the root of the project.

5. Create Cloudinary account and connect it to project.

  - This project uses Cloudinary's media platform to save image files to cloud storage. 

  - www.cloudinary.com

  - Retrieve 'cloud name', 'API Key', and 'API Secret' from Dashboard under Account Details.


  - Input Cloudinary information into .env file as follows: 

```bash
CLOUDINARY_NAME='cloud name'
CLOUDINARY_API_KEY='API Key'
CLOUDINARY_API_SECRET='API Secret'
```

  - 'cloud name', 'API Key', and 'API Secret' needs to be surrounded by quotations. 


6. Create Zenserp account and connect it to project.

  - This project uses Zenserp's google image search API for the outfit recommendation feature.

  - https://zenserp.com/google-image-search-api/


  - Retrieve 'API Key' from Dashboard under API key.

  - Input API key into .env file as follows: 

```bash
REACT_APP_ZENSERP_KEY='API key'
```

  - 'API Key' needs to be surrounded by quotations. 

7. Create WeatherAPI account and connect it to project.

  - This project uses weatherapi to provide users with weather information.

  - https://www.weatherapi.com/

  - Retrieve 'API Key' from Dashboard under API key.

  - Input API key into .env file as follows: 

```bash
REACT_APP_WEATHERAPI_KEY='API key'
```

  - 'API Key' needs to be surrounded by quotations. 

8. Install PostgreSQL server. 

  - https://www.postgresql.org/download/windows/

  - Setup password during installation. 

9. Install PostgreSQL client GUI (Postbird).

  - https://www.electronjs.org/apps/postbird

  - When the installation finishes and the program opens, enter in the username and password set above in step 8
to connect to your locally running Postgres instance.

  - Create a new database (database tab -> create Database).


10. Sequelize setup.

  - Input database name, user ID, and password set in steps 8 and 9 into the .env file as follows:   

```bash
SEQUELIZE_DATABASE_USER_ID='user ID'
SEQUELIZE_DATABASE_PW='password'
SEQUELIZE_DATABASE_NAME='name'
```

  - Name, user ID, and password needs to be surrounded by quotations. 



## License

[MIT](https://choosealicense.com/licenses/mit/)

  
