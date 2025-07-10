import mongoose from 'mongoose';

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:');
    }
};
export default connectToMongo;