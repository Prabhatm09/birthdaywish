import mongoose from "mongoose";

const connectMongoDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("connected to mongodb");
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDb;
