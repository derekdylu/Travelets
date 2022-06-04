<h1 align="center">
  <br>
  <img src="https://i.ibb.co/42twpSx/Logo-wordmark.png" alt="logo" width="250">
</h1>

<h4 align="center">Official Environment Documentation with Instructions</h4>
<h5 align="center">IM3007 第五組</h5>
<h6 align="center">
B07610008 黃茹暄 | B08705016 鄭亦倢 | B08705021 盧德原<br>B08705027 林暐倫 | B08705028 葉柏辰 | B08705036 朱修平 | B08705052 黃晨亘
</h6>

<p align="center">
  <a href="https://youtu.be/eq2FWnvRG7k">
    Prototype
    <img src="https://shields.io/youtube/views/eq2FWnvRG7k"
         alt="YouTube Intro">
  </a>
  • 
  <a href="https://youtu.be/71VSAsxW_3E">
    Presentation
    <img src="https://shields.io/youtube/views/71VSAsxW_3E"
         alt="YouTube Demo">
  </a>
</p>

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" height="45" align="center"  alt="vue">
    <img src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png" height="60" align="center"  alt="vuex">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png" height="50" align="center" alt="django">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png" height="52" align="center" alt="google maps">
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Development](#development)
  - [Frontend](#frontend)
    - [Development](#development-1)
  - [Backend](#backend)
    - [Development](#development-2)

## Introduction

<p align="center">
  <a href="https://ibb.co/jzX2Wgq"><img src="https://i.ibb.co/nBJvnz4/i-Phone-12-Pro-Wooden-Hands.png" alt="mockup" border="0" height="400"></a>
</p>

**Travelets** is a web-based application that allows users to manage their itineraries with friends easily. The ideal application will have features like (but not limited to) managing itinerary by participant's poll, exploring shared attractions on the platform, and monitoring the condition of routes and attractions. Since this is a term project of a coure at National Taiwan University, we didn't complete the full development, only demonstrating partial features.

Meanwhile, since we don't have any fund to run this application's Google Maps Platform API, **we didn't deploy this application online to prevent the extra fees**.
## Development 
![](https://shields.io/badge/platform-macOS%20%7C%20Windows-%23989898?style=flat-square)
- OS: macOS / Windows 
- PM: Yarn / npm
- IDE: Visual Studio Code
### Frontend
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" height="25" align="center" alt="vue"> <img src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png" height="30" align="center"  alt="vuex"> <img src="https://iconape.com/wp-content/png_logo_vector/vuetify-logo.png" height="27.5" align="center"  alt="vuetify">

#### Development
1. Update or intall `@vue/cli` by following the [official site](https://cli.vuejs.org/guide/installation.html). Also be sure that Node.js is up to date. Vue CLI 4.x requires Node.js version 8.9 or above (v10+ recommended).
    ```sh
    # YARN
    yarn global add @vue/cli

    # CHECK THE VERSION
    vue --version
    ```
2. If you have old version on your machine, to remove it, run in your terminal,
    ```sh
    npm uninstall vue-cli -g
    # OR
    yarn global remove vue-cli
    ```
3. Install required packages in `Travelets/frontend`
    ```sh
    cd Travelets/frontend
    yarn install
    ```
4. Run the development server
    ```sh
    # IN Travelets DIRECTORY
    yarn frontend
    # IN Travelets/frontend DIRECTORY
    yarn serve
    ```
5. Also, to run tne **unit test** and **user acceptance test(Selenium)** in `Travelets/frontend`
    ```sh
    npm run test:unit
    ```
### Backend
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png" height="25" align="center" alt="django"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png" height="30" align="center"  alt="gmaps">

#### Development
1. Install `virtualenv`
    ```sh
    cd Travelets/backend
    ```
    ```sh
    pip install virtualenv
    virtualenv venv
    source venv/bin/activate
    # OR
    py -3 -m venv .venv
    .venv\scripts\activate
    ```
2. Install requirements
    ```sh
    cd django_google_api
    pip install -r requirements.txt
    pip install django-rest-framework
    ```
3. Run backend server, change `python` to `python3` in some machines
    ```sh
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ```
4. Don't forget to activate the following Google API's
   - reCAPTURE
   - Places API
   - Maps Javascript API
   - Directions API
   - Distance Matrix API
   - Geocoding API
5. To manage database, you'll need to create a **super user** by following the instructions after this command
    ```sh
    python manage.py createsuperuser
    ```
6. The database manager will be at http://127.0.0.1:8000/admin/