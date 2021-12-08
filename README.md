Guardian Sell
-----

## Introduction
Guardian Sell is an ecommerce web application that allows the user to buy and sell books online.

## Dependencies
### 1. Backend Dependencies
The backend of the project includes:
* **virtualenv** as a tool to create isolated an Python environment
* **Postgres** as our database of choice
* **Python 3** and **Django** as our server language and server framework

You can download and install the dependencies mentioned above using these `pip3`:

```
virtualenv venv
source ./venv/bin/activate
pip3 install django
pip3 install psycopg2
```
### 2. Frontend Dependencies
We use HTML, CSS, and Bootstrap 5 for our front end


## Development Setup
```
git clone https://github.com/rawda-developer/Guardian-Sell
cd Guardian-Sell
```
**Run the development server:**
```
    ./manage.py makemigrations
    ./manage.py migrate
    ./manage.py createsuperuser
    ./manage.py check
    ./manage.py test
    ./manage.py runserver
```
**Verify on the Browser**<br>
Navigate to project homepage [http://127.0.0.1:8000/](http://127.0.0.1:8000/) or [http://localhost:8000](http://localhost:8000) 
