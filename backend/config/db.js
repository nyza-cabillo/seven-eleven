import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://seveneleven:kelagwapa@cluster0.znkct2t.mongodb.net/product-del"
    )
    .then(() => console.log("DB Connected"));
};
