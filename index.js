const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productService = require('./src/services/productService');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'src/views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  const productsArray = productService.getProducts();
  const companiesArray = productService.getCompanies();
  
  res.render('index', {
    productsArray,
    companiesArray
  });
});

app.post('/compare', (req, res) => {
  const { productSelect, selectedCompanies } = req.body;
  const companies = Array.isArray(selectedCompanies) ? selectedCompanies : [selectedCompanies];
  
  // Import product data
  const productData = require('./db.json');
  
  let requestedData = [];
  companies.forEach(companyId => {
    const company = productService.getCompanies().find(c => c.id === companyId);
    if (company && productData[company.name]) {
      const product = productData[company.name].find(p => p.id === productSelect);
      if (product) {
        requestedData.push(product);
      }
    }
  });

  res.render('comparisonPage', {
    requestedData,
    productSelect,
    selectedCompanies: companies
  });
});

// Error handling
app.use((req, res, next) => {
  res.status(404).render('error', {
    error: {
      status: 404,
      message: 'Page not found'
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    error: {
      status: 500,
      message: 'Internal server error'
    }
  });
});

// Export for Vercel
module.exports = app;

// Start server locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}