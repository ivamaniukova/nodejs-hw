import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {connectMongoDB} from "./db/connectMongoDB.js";
import dns from "dns";

import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

dns.setServers(["1.1.1.1", "1.0.0.1"]);

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(notesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
