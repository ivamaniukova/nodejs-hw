import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    await mongoose.connect(mongoUrl);
    console.log('✅ MongoDB connection established successfully');

    } catch (error) {
  console.error('❌ Failed to connect to MongoDB:', {
    name: error.name,
    message: error.message,
    code: error.code,
  });
  process.exit(1);
}};
