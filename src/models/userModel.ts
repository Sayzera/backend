import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface User extends Document {
  username: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, 
  },
});

// Şifreyi hash'le
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password as string, salt);
  next();
});

// Şifreyi doğrula
userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
