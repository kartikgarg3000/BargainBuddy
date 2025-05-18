const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000; // Use environment variable for port

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'src/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
app.use('/', routes);

// Vercel requires module.exports for serverless functions
module.exports = app;

// Only listen locally when not in Vercel environment
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}