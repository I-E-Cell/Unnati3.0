// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a schema and model for your form data
const formSchema = new mongoose.Schema({
  team_name: String,
  Leader_name: String,
  Leader_branch: String,
  floating_email: String,
  floating_number: String,
  is_girl_member: Boolean,
  is_interbranch: Boolean,
  number_of_members: String,
  member1_name: String,
  member1_branch_and_reg: String,
  member1_email: String,
  member1_whatsapp_no: String,
  member2_name: String,
  member2_branch_and_reg: String,
  member2_email: String,
  member2_whatsapp_no: String,
  // Add more fields as needed
});

const Form = mongoose.model('Form', formSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define an API route for form submissions
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the form data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
