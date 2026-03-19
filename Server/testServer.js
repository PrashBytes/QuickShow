import 'dotenv/config';
import express from "express";
import { Inngest } from "inngest";
import { serve } from "inngest/express";


const app = express();

const inngest = new Inngest({ id: "test-app" });

const testFunction = inngest.createFunction(
  { id: "test-function" },
  { event: "test/event" },
  async () => {
    console.log("Inngest working");
  }
);

const handler = serve({
  client: inngest,
  functions: [testFunction],
});

app.get("/api/inngest", handler);
app.post("/api/inngest", handler);
app.put("/api/inngest", handler);

app.listen(3000, () => {
  console.log("Test server running on http://localhost:3000");
});