import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let allowedOrigins = ["http://localhost:5173"];
app.use(
    cors({
        origin: allowedOrigins,
        methods: "GET, POST, PUT, DELETE",
        allowedHeaders: "Content-Type, Authorization",
        credentials: true,
    })
);

app.get('/', (req, res) => {
  res.send('Welcome to the Smart Expense & Budget Tracker !');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 