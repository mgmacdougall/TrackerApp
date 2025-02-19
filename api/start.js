import 'dotenv/config';
import { app } from './index.js';
import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } catch (e) {
        console.log('error encounter', e)
    }


}

connectDB();


const PORT = process.env.SERVER_PORT || 3030
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));