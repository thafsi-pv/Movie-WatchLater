# Movie Watch Later App

<img width="1440" alt="Screenshot 2023-06-13 at 7 25 58 PM" src="https://github.com/thafsi-pv/Movie-WatchLater/assets/22377348/ab7fd79e-e84a-483a-959f-877872952787">
<img width="1440" alt="Screenshot 2023-06-13 at 7 26 41 PM" src="https://github.com/thafsi-pv/Movie-WatchLater/assets/22377348/78d9303b-c6e4-4578-9942-647deb7c1a1e">
<img width="1440" alt="Screenshot 2023-06-13 at 7 26 38 PM" src="https://github.com/thafsi-pv/Movie-WatchLater/assets/22377348/68d58d23-7e63-4084-a447-6ae3674df3a3">



https://github.com/thafsi-pv/Movie-WatchLater/assets/22377348/f9851068-5e20-4030-b5c5-143bbd560a8a




This is a web app built using React Express/NodeJs and MongoDB that allows users to add movies to a watch list. The app consists of two main pages: a home page and a login page. The home page displays a list of all the movies added from the Movie Dashboard app and allows users to add them to their "watch later" list. If the user is not logged in or tries to add a movie without logging in, they are redirected to the login page. The login page allows users to sign up and log in with an email and password.

## Features

### Home Page

The home page displays a list of all movies added from the Movie Dashboard app. For each movie, it shows the movie title, rating, star category, genre badge, and movie poster image. The user can click on the "add to watch later" button to add the movie to their watch list. If the user is not logged in, they are redirected to the login page.

### Login Page

The login page allows users to sign up and log in with an email and password. Upon successful login, the user is redirected to the home page. The user's password is hashed using bcrypt for security, and JWT (JSON Web Tokens) are used for token generation.


## Built With

- React
- Axios
- Bcrypt
- JWT
- Mongoose
- React hot toast
- Tailwind
- Cloudinary CDN
