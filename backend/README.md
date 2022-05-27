After cloning the repo, please go to the backend folder and run the following command:

```sh
cd Travelets/backend
```

### Virtual environment
```sh
pip install virtualenv
virtualenv venv
source venv/bin/activate

# OR

py -3 -m venv .venv
.venv\scripts\activate
```

### Requirements
```sh
cd django_google_api
pip install -r requirements.txt
pip install django-rest-framework
```

### To start server:
```sh
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# https://localhost:8000 in your browser
```

Note:

Don't forget to activate the following Google API's

reCAPTURE Places API Maps Javascript API Directions API Distance Matrix API Geocoding API


# SUPER USER

```sh
# Run in terminal
python manage.py createsuperuser

```

Set username & password

go to http://127.0.0.1:8000/admin/


<!-- npm install axios
npm install vue-router -->