## Setup

- Clone the Git repository

## 1. Build the docker image from Scratch

```bash
$ docker-compose up --build
```

```bash
$ docker-compose up
```

## 2. Run the application with docker:

```bash
$ docker pull fahadkhann/weatherapi-app:latest
```

```bash
$ docker run -p 3000:3000 fahadkhann/weatherapi-app:latest