const app = require("./app");
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
