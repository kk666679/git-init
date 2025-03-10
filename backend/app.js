{
    "name": "backend",
    "version": "1.0.0",
    "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js",
      "test": "jest",
      "lint": "eslint .",
      "format": "prettier --write ."
    },
    "dependencies": {
      "express": "^4.17.1",
      "cors": "^2.8.5"
    },
    "devDependencies": {
      "nodemon": "^2.0.12",
      "eslint": "^7.32.0",
      "prettier": "^2.4.1",
      "jest": "^27.2.0"
    }
  }