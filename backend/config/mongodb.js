import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    // This arrow function will run whenever a DB connection is established
    console.log("DB Connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/forever`); // Connect to FOREVER database
};

export default connectDB;
