const PORT = 3000
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("opa"))

app.listen(PORT, () => console.log(`localhost:${PORT}`))
