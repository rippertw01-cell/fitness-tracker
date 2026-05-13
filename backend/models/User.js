import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '請輸入有效的Email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false // 查詢時不默認返回密碼
  },
  profile: {
    firstName: String,
    lastName: String,
    age: Number,
    height: Number,      // 公分
    weight: Number,      // 公斤
    gender: {
      type: String,
      enum: ['male', 'female', 'other']
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// 密碼加密中間件
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// 驗證密碼方法
UserSchema.methods.comparePassword = async function(inputPassword) {
  return await bcryptjs.compare(inputPassword, this.password);
};

// 計算BMI
UserSchema.methods.calculateBMI = function() {
  if (!this.profile.height || !this.profile.weight) return null;
  const heightInMeters = this.profile.height / 100;
  return (this.profile.weight / (heightInMeters * heightInMeters)).toFixed(2);
};

// 返回用戶公開信息
UserSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default mongoose.model('User', UserSchema);
