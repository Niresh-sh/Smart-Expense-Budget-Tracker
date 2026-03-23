import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/db.js';
import helmet from 'helmet';
import morgan from 'morgan';
import expensesRoutes from './Routes/expensesRoute.js';
import dashboardRoutes from './Routes/DashboardRoute.js';
import userRoutes from './Routes/UserRoute.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(morgan('dev'));
connectDB();
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


app.use(`/api/users`, userRoutes);
app.use(`/api/dashboard`, dashboardRoutes);
app.use(`/api/expenses`, expensesRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Smart Expense & Budget Tracker !');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 