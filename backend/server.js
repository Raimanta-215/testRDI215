const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: "Article 1" },
  { id: 2, name: "Article 2" },
  { id: 3, name: "Article 3" }
];

// Route GET pour récupérer les articles
app.get("/api/items", (req, res) => {
  res.json(items);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://0.0.0.0:${PORT}`));
