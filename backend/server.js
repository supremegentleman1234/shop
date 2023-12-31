dotenv.config();
import express from 'express';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js '
connectDB(); // connect to database
const port = process.env.PORT || 8000; 

const app = express();

app.post('/', (req,res)=>{
    res.send("API is running..");
})
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})