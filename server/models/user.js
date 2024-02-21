import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    mobile: { type: String, trim: true },
    profilePic: { type: String, trim: true },
    linkedinLink: { type: String, trim: true },
    githubLink: { type: String, trim: true },
    resume: { type: String, trim: true },
    type: { type: String, trim: true },
    schoolName: { type: String, trim: true },
    startDate: { type: String, trim: true },
    endDate: { type: String, trim: true },
    projectName: { type: String, trim: true },
    projectDescription: { type: String, trim: true },
    soloProject: { type: String, trim: true },
    projectLink: { type: String, trim: true },
    pastExperiences: [{
        companyName: { type: String, trim: true },
        companyWebsite: { type: String, trim: true },
        role: { type: String, trim: true },
        experienceStartDate: { type: String, trim: true },
        experienceEndDate: { type: String, trim: true },
        coverLetter: { type: String, trim: true }
    }],
    totalCoins: { type: Number, default: 0 },
    appliedJobs: [{ type: Number }] 
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    lastOtp: { type: Number, trim: true },
    profile: profileSchema // Embed profile schema within user schema
});

const User = mongoose.model("User", userSchema);

export default User;
