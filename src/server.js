import app from "./app.js";
import "./database/index.js";
import "./routes.js";

app.listen(3001, () => console.log("rodando na porta 3001"));
