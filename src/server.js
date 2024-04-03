import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

app.use(express.static('dist'));

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
