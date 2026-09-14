import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';
import nodemailer from 'nodemailer';

// Fix Node.js DNS SRV lookup on Windows networks
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.log('DNS setServers notice:', e.message);
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://alishabatham2_db_user:urq6lBf4WlNfk1Um@cluster0.upabs4c.mongodb.net/nx-shield?appName=Cluster0";
const SENDER_EMAIL = (process.env.SENDER_EMAIL || 'alisha.522373@gmail.com').trim();
const RECIPIENT_EMAIL = (process.env.RECIPIENT_EMAIL || 'hr@nexisparkx.com').trim();
const CLEAN_EMAIL_PASS = (process.env.EMAIL_PASS || '').replace(/\s+/g, '');

let isMongoConnected = false;
const fallbackStore = [];

// Connect to MongoDB Database nx-shield
mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 4000 })
  .then(() => {
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB Atlas Database: nx-shield');
  })
  .catch((err) => {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB Atlas Connection Warning: Could not connect to Atlas Cluster.');
    console.warn('💡 Tip: Make sure your IP is whitelisted (0.0.0.0/0) in MongoDB Atlas -> Network Access.');
  });

// Schema & Model explicitly target collection 'nx-shield'
const ResponseSchema = new mongoose.Schema({
  formType: { type: String, required: true }, // 'contact', 'subscribe', 'auth'
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  institution: { type: String, default: '' },
  userCount: { type: String, default: '' },
  requirements: { type: String, default: '' },
  action: { type: String, default: '' },
  submittedAt: { type: Date, default: Date.now }
}, { collection: 'nx-shield' });

const FormResponse = mongoose.model('FormResponse', ResponseSchema);

// Nodemailer Transporter Configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SENDER_EMAIL,
    pass: CLEAN_EMAIL_PASS
  }
});

// Verify Nodemailer Transporter Connection
if (CLEAN_EMAIL_PASS && CLEAN_EMAIL_PASS !== 'your_app_password_here') {
  transporter.verify((error) => {
    if (error) {
      console.error('❌ [Nodemailer Transporter Verification Error]:', error.message);
    } else {
      console.log(`✅ [Nodemailer] Gmail Transporter Verified & Ready! Sender=${SENDER_EMAIL} -> Target=${RECIPIENT_EMAIL}`);
    }
  });
}

// Nodemailer Email Notification Dispatcher
async function sendFormEmailNotification(subject, htmlContent) {
  if (!CLEAN_EMAIL_PASS || CLEAN_EMAIL_PASS === 'your_app_password_here') {
    console.log(`ℹ️ [Nodemailer] Prepared email for ${RECIPIENT_EMAIL} from ${SENDER_EMAIL}. (Set Gmail App Password in .env EMAIL_PASS)`);
    return;
  }
  try {
    const mailOptions = {
      from: `"NX Shield Forms" <${SENDER_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject: subject,
      html: htmlContent
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(`📧 [Nodemailer SUCCESS] Email delivered to ${RECIPIENT_EMAIL}! Message ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('❌ [Nodemailer Send Error]:', error.message);
    throw error;
  }
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    mongoConnected: isMongoConnected,
    message: 'NX Shield Backend Active', 
    collection: 'nx-shield',
    sender: SENDER_EMAIL,
    recipient: RECIPIENT_EMAIL 
  });
});

// Post Contact / Onboarding Form
app.post('/api/contact', async (req, res) => {
  try {
    const { institution, instName, userCount, phone, requirements } = req.body;
    const finalInst = institution || instName || 'Not specified';
    
    const responseData = {
      formType: 'contact',
      institution: finalInst,
      userCount: userCount || 'Not specified',
      phone: phone || 'Not specified',
      requirements: requirements || 'None',
      submittedAt: new Date()
    };

    if (isMongoConnected) {
      const newResponse = new FormResponse(responseData);
      await newResponse.save();
      console.log('✅ Saved onboarding response to collection nx-shield:', newResponse);
    } else {
      fallbackStore.push(responseData);
      console.log('💾 Saved to fallback memory store:', responseData);
    }

    // Send Email to hr@nexisparkx.com
    const emailSubject = `🔔 New Institutional Onboarding Request: ${finalInst}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-top: 0;">New NX Shield Onboarding Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr><td style="padding: 8px; font-weight: bold; width: 180px; border-bottom: 1px solid #edf2f7;">Institution / Organization:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${finalInst}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Estimated Users:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${userCount || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Contact Phone:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${phone || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Requirements:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${requirements || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Submitted At:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${new Date().toLocaleString()}</td></tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #64748b;">Saved in database collection: <strong>nx-shield</strong></p>
      </div>
    `;
    
    // Dispatch email async
    sendFormEmailNotification(emailSubject, emailHtml).catch(err => console.error('Email dispatch error:', err.message));

    res.status(201).json({ success: true, message: 'Onboarding request recorded & email dispatched', data: responseData });
  } catch (error) {
    console.error('Error saving contact request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Post Auth / Admin Signin & Signup Form
app.post('/api/auth', async (req, res) => {
  try {
    const { name, email, action } = req.body;
    const responseData = {
      formType: 'auth',
      name: name || '',
      email: email || '',
      action: action || 'auth',
      submittedAt: new Date()
    };

    if (isMongoConnected) {
      const newResponse = new FormResponse(responseData);
      await newResponse.save();
      console.log('✅ Saved auth response to collection nx-shield:', newResponse);
    } else {
      fallbackStore.push(responseData);
      console.log('💾 Saved to fallback memory store:', responseData);
    }

    // Send Email to hr@nexisparkx.com
    const emailSubject = `🔑 New Admin Account Submission (${action}): ${email}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-top: 0;">New NX Shield Auth Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr><td style="padding: 8px; font-weight: bold; width: 180px; border-bottom: 1px solid #edf2f7;">Action Type:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${action}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Name / Institution:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${name || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">User Email:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #edf2f7;">Submitted At:</td><td style="padding: 8px; border-bottom: 1px solid #edf2f7;">${new Date().toLocaleString()}</td></tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #64748b;">Saved in database collection: <strong>nx-shield</strong></p>
      </div>
    `;

    // Dispatch email async
    sendFormEmailNotification(emailSubject, emailHtml).catch(err => console.error('Email dispatch error:', err.message));

    res.status(201).json({ success: true, message: 'Auth response recorded & email dispatched', data: responseData });
  } catch (error) {
    console.error('Error saving auth request:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Post Newsletter Subscription
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const responseData = {
      formType: 'subscribe',
      email: email || '',
      submittedAt: new Date()
    };

    if (isMongoConnected) {
      const newResponse = new FormResponse(responseData);
      await newResponse.save();
      console.log('✅ Saved subscription to collection nx-shield:', newResponse);
    } else {
      fallbackStore.push(responseData);
      console.log('💾 Saved to fallback memory store:', responseData);
    }

    // Send Email to hr@nexisparkx.com
    const emailSubject = `📧 New Newsletter Subscription: ${email}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px; margin-top: 0;">New Threat Digest Subscriber</h2>
        <p style="font-size: 14px;">Subscriber Email: <strong>${email}</strong></p>
        <p style="font-size: 12px; color: #64748b;">Target collection: <strong>nx-shield</strong></p>
      </div>
    `;

    // Dispatch email async
    sendFormEmailNotification(emailSubject, emailHtml).catch(err => console.error('Email dispatch error:', err.message));

    res.status(201).json({ success: true, message: 'Subscription recorded & email dispatched', data: responseData });
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get All Saved Responses in collection nx-shield
app.get('/api/responses', async (req, res) => {
  try {
    if (isMongoConnected) {
      const responses = await FormResponse.find().sort({ submittedAt: -1 });
      res.json({ success: true, count: responses.length, collection: 'nx-shield', data: responses });
    } else {
      res.json({ success: true, count: fallbackStore.length, source: 'memory_fallback', data: fallbackStore });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 NX Shield Backend running on http://localhost:${PORT}`);
  console.log(`✉️ Nodemailer configured: Sender=${SENDER_EMAIL} -> Recipient=${RECIPIENT_EMAIL}`);
});
