# LearningDocker
<br/>
<p align="center">
  <a href="https://github.com/agustinlopez23/LearningDocker">
    <img src="https://www.docker.com/wp-content/uploads/2021/09/Moby-run.png.webp" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Learning Docker</h3>

  <p align="center">
    Implementation of docker on a simple Node with mongoDB project, using docker compose, linking containers, using volumes to persist the db.
    <br/>
    <br/>
    <a href="https://github.com/agustinlopez23/LearningDocker"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  </p>
</p>

![Stargazers](https://img.shields.io/github/stars/agustinlopez23/LearningDocker?style=social) ![License](https://img.shields.io/github/license/agustinlopez23/LearningDocker) 

## Built With

The frameworks used in this project were

* [NodeJS](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://docs.docker.com/)
* [Docker Compose](https://docs.docker.com/engine/reference/commandline/compose/)

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

You need install in your pc NodeJS, and Docker

### Installation

1. Clone the repo

```sh
git clone https://github.com/agustinlopez23/LearningDocker.git
```

2. Install NPM packages

```sh
npm install
```



## Usage

You need to create two images in docker, one with the app that is in this repository, you do that through the Dockerfile execution that you find in the root folder of the project, and you must download the mongo image, and lift it in a container. When you have the two containers running, you can build with docker compose the application, which persists the data using mongo and docker without installing anything else.

1. Dockerfile

```sh
docker build -t <imagenametocreate>:<tag> .
```

2. Docker Compose

```sh
docker compose up
```


### GET /
Get All users that you create


### GET /create
Create one user

### GET /delete
Delete all users


