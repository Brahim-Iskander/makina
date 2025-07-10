import e from 'express';
import mongoose from 'mongoose';
const mongoURI = "mongodb+srv://iskander:Topadmin2005@cluster0.wkuwwi9.mongodb.net/makinapack?retryWrites=true&w=majority&appName=Cluster0"
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:');
    }
};
export default connectToMongo;