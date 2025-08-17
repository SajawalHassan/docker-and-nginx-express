# Docker + Nginx + Express

This project demonstrates running an Express.js application behind an Nginx reverse proxy using Docker and Docker Compose.

## Features

* Express.js backend serving static and dynamic content
* Nginx as a reverse proxy
* Dockerized for consistent environments
* Easy to run and extend for local development

## Project Structure

```
.
├── Dockerfile          # Dockerfile for Express app
├── docker-compose.yaml # Docker Compose configuration
├── server.js           # Main Express app entry point
├── nginx/              # Nginx configuration files
├── public/             # Static assets
├── package.json        # Node.js dependencies and scripts
└── .gitignore
```

## Prerequisites

* Docker
* Docker Compose

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/SajawalHassan/docker-and-nginx-express.git
cd docker-and-nginx-express
```

2. **Build and start containers**

```bash
docker-compose up --build
```

3. **Access the application**

Open [http://localhost](http://localhost) in your web browser.
