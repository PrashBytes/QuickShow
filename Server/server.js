import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { serve } from 'inngest/express';
import { inngest, functions } from './inngest/index.js';

dotenv.config({ path: './.env' });

const app = express();
const port = 3000;

// Connect DB
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => res.send('Server is Live!'));

// Inngest handler (LOCAL)
const inngestHandler = serve({
  client: inngest,
  functions,
});

app.get('/api/inngest', inngestHandler);
app.post('/api/inngest', inngestHandler);
app.put('/api/inngest', inngestHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



