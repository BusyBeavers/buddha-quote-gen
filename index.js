import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 5387;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.post("/", async (req, res) => {
  try {
    const response = await fetch("https://buddha-api.com/api/random");
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "error calling api",
        response: data,
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("error calling api");
    return res.status(500).json({ error: "error calling api" });
  }
});
