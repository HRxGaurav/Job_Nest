import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";


dotenv.config();

const ServiceEmail = process.env.ServiceEmail;
const ServiceEmailPassword = process.env.ServiceEmailPassword;

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ServiceEmail,
        pass: ServiceEmailPassword
    }
});

// Function to generate a random 4-digit OTP
const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

// Function to send OTP via email
const sendOTP = async (req, res) => {
  const {email} = req.body; 

  if (!email) {
      return res.status(400).json({ message: 'Email is required' });
  }

  const otp = generateOTP();
  console.log(otp);

  const mailOptions = {
      from: ServiceEmail,
      to: email,
      subject: 'JobNest: OTP for Verification',
      text: `Your OTP (One Time Password) for JobNest is: ${otp}`
  };

  try {
      await transporter.sendMail(mailOptions);
      let user = await User.findOne({ username: email });

      if (user) {
          // Update last OTP if user exists
          user.lastOtp = otp;
      } else {
          // Create new user if not exists
          user = new User({ username: email, lastOtp: otp });
      }

      await user.save();
      return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
      console.error('Error occurred while sending email:', error);
      return res.status(500).json({ message: 'Error sending OTP' });
  }
};


// Function to verify OTP
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
      const user = await User.findOne({ username: email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      if (otp == user.lastOtp && otp > -1) {
          // Update the last OTP to mark it as used
          user.lastOtp = -1111;
          await user.save();
          
          // Generate JWT token
          const token = jwt.sign({ userID: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });
          
          // Send token in response
          return res.status(200).json({ message: 'OTP is valid', token, username: email.split('@')[0], id: user._id });
      } else {
          return res.status(401).json({ message: 'Invalid OTP' });
      }
  } catch (error) {
      console.error('Error occurred while verifying OTP:', error);
      return res.status(500).json({ message: 'Error verifying OTP' });
  }
};


export { sendOTP, verifyOTP };
