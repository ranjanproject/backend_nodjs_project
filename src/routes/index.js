const express = require('express'); 
// Imports the Express framework to use its routing features.
const Calculator = require('../controllers/calculator');

const setRoutes = (app) => { 
    // Defines a function that takes your Express app as an argument.
    const router = express.Router(); 
    // Creates Calculator instance to use its methods.
    const calculator = new Calculator();

    // Routes for adding two numbers
    router.get('/add', (req, res) => { 
      const a = Number(req.query.a);
      const b = Number(req.query.b);
      if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Both a and b must be numbers.' });
      }
      const result = calculator.add(a, b);
      res.json({ result });
    });

    // Routes for subtracting two numbers
    router.get('/subtract', (req, res) => {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            return res.status(400).json({ error: 'Both a and b must be numbers.' });
        }
        const result = calculator.subtract(a, b);
        res.json({ result });
     });  
        
    // Routes for multiplying two numbers
    router.get('/multiply', (req, res) => {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if (isNaN(a) || isNaN(b)) {
            return res.status(400).json({ error: 'Both a and b must be numbers.' });
        }
        const result = calculator.multiply(a, b);
        res.json({ result });
     });   
    app.use('/', router); 
    // Registers the router with the app, so all routes defined above are active.
};

module.exports = { setRoutes };
// Exports the setRoutes function so it can be used in other files (like your main index.js).