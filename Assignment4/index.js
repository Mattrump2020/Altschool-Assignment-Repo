const express = require('express');
const app = express();
const logger = require('./logger');
const authorRouter = require('./authorRouter');

// Using JSON middleware for parsing JSON bodies
app.use(express.json());

// Using the logger middleware
app.use(logger);

// Using the author router for all routes starting with /authors
app.use('/authors', authorRouter);

// Global error handler middleware
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
