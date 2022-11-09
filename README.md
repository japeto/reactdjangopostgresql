# Dockerized React + Django + PostgreSQL

A Dockerized React + Django + PostgreSQL Template

## What's included?

### Frontend

- Javascript (frontend language)
- React (frontend framework)
  - Create React App 
  - Axios to request

### Backend

- Python3 (backend language)
- Django (backend framework)
  - Psycopg2 (PostgreSQL adapter for Python)
  - Python-decouple (to get env file content)
  - Django REST Framework (Django's toolkit for building Web APIs)

### Database

- PostgreSQL (database)

## Getting Started

Clone this repository to your local machine:

```bash
$ git clone https://github.com/japeto/reactdjangopostgres.git
```

### To run the client


In the project folder,

```bash
$ cd frontend
```

##### `./frontend/.env` file

```python
SECRET_KEY=
DOMAIN=
REACT_APP_STATIC_URL=
REACT_APP_MEDIA_ROOT_DEV=
REACT_APP_MEDIA_ROOT_PROD=
REACT_APP_MEDIA_ROOT_URL=
```

### To run the server


In the project folder,

```bash
$ cd backend
```

##### `./backend/.env` file

```python
SECRET_KEY=
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_PORT=
DOMAIN=
STATIC_URL=
```

#### Database

In addition to the database, you need to setup the Python environment. 

In the project folder,

```bash
$ cd database
```

##### `./database/.env` file

```python
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_HOST=
POSTGRES_PORT=
```
