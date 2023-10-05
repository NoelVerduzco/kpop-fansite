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

server.get('/groups/:groupId', (req, res) => {
  const { groupId } = req.params;

  // Use the `router.db` object to access the data from JSON Server
  const group = router.db.get('groups').find({ group_id: parseInt(groupId) }).value();

  if (group) {
    res.json(group); // Send the group as JSON response
  } else {
    res.status(404).json({ error: 'Group not found' }); // Return a 404 error if group is not found
  }
});


