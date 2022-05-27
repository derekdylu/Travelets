After cloning the repo, please go to the backend folder and run the following command:


1. cd Travelets/backend

### Virtual environment
#  ----------------------
2. pip install virtualenv
3. virtualenv venv
4. source venv/bin/activate
# -----------------------

# OR

# -----------------------
2. py -3 -m venv .venv
3. .venv\scripts\activate
# -------------------------

5. pip install -r requirements.txt

# To start server:
6. python manage.py makemigrations
7. python manage.py migrate
8. python manage.py runserver
9. type in https://localhost:8000 in your browser

Note:

Don't forget to activate the following Google API's

reCAPTURE Places API Maps Javascript API Directions API Distance Matrix API Geocoding API



# SUPER USER

```sh

# Run in terminal
python manage.py createsuperuser

```

Set username, password

go to http://127.0.0.1:8000/admin/


<!-- npm install axios
npm install vue-router -->