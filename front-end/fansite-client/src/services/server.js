const jsonServer = require('json-server');
const server = jsonServer.create();
const cors = require('cors');

// Enable CORS for your React app's domain (e.g., http://localhost:3000)
server.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
}));

// Include your db.json file
const router = jsonServer.router('db.json');
server.use(router);

// Start JSON Server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
