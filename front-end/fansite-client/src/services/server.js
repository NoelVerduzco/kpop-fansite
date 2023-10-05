const jsonServer = require('json-server');
const server = jsonServer.create();
const cors = require('cors');

// Enable CORS for your React app's domain (e.g., http://localhost:3000)
server.use(cors({
  origin: 'http://localhost:3000', 
}));

// Include your db.json file
const router = jsonServer.router('db.json');
server.use(router);

// Add a custom route to retrieve a specific group by ID
// router.get('/groups/:groupId', (req, res) => {
//   console.log('Custom route called');
//   const groupId = parseInt(req.params.groupId);
//   const groups = require('./db.json').groups;
//   const group = groups.find(g => g.group_id === groupId);

//   if (group) {
//     res.json(group);
//   } else {
//     res.status(404).json({ error: 'Group not found' });
//   }
// });

server.use(router);

// Start JSON Server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

