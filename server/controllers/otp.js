import OTP from '../models/otp.js'
import generateOTP from '../utils/generateOTP.js'
import sendEmail from '../utils/sendEmail.js'
import { hashData, verifyHashedData } from '../utils/hashData.js'
const { AUTH_EMAIL } = process.env

const sendOTPController = async (req, res) => {
  try {
    const { email, subject, message, duration } = req.body
    const createdOTP = await sendOTP({
      email,
      subject,
      message,
      duration
    })
    res.status(200).json(createdOTP)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const verifyOTPController = async (req, res) => {
  try {
    let { email, otp } = req.body
    const validOTP = await verifyOTP({ email, otp })
    res.status(200).json({ valid: validOTP })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const verifyOTP = async ({ email, otp }) => {
  try {
    if(!(email && otp)) {
      throw Error('Provide values for email, otp')
    }

    // ensure otp record exists
    const matchedOTPRecord = await OTP.findOne({ email })
    if(!matchedOTPRecord) {
      throw Error('No otp record found')
    }

    const {  expiresAt } = matchedOTPRecord

    // checking for expired code
    if(expiresAt < Date.now()) {
      await OTP.deleteOne({ email })
      throw Error('Code has expired. Request for a new one')
    }

    // not expired yet, verify value
    const hashedOTP = matchedOTPRecord.otp
    const validOTP = await verifyHashedData(otp, hashedOTP)
    return validOTP

  } catch (error) {
    throw(error)
  }
}

const sendOTP = async ({ email, subject, message, duration = 1 }) => {
  try {
    //console.log('Received parameters:', { email, subject, message, duration });

    if(!(email && subject && message)) {
      throw Error('Provide values for email, subject, message')
    }

    // clear any old record
    await OTP.deleteOne({ email })

    //generate pin
    const generatedOTP = await generateOTP()

    //console.log('Generated OTP:', generatedOTP);

    // send email
    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject,
      html: `<p>${message}</p>
      <p style="color:tomato; font-size:25px; letter-spacing:2px;">
        <b>${generatedOTP}</b>
      </p>
      <p>This code 
        <b>expires in ${duration} hour(s)</b>.
      </p>`,
    }
    await sendEmail(mailOptions)

    //save otp record
    const hashedOTP = await hashData(generatedOTP)
    const newOTP = await new OTP({
      email, 
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000 * + duration,
    })

    //console.log('New OTP record:', newOTP);

    const createdOTPRecord = await newOTP.save()
    //console.log('Created OTP record:', createdOTPRecord);
    return createdOTPRecord

  } catch (error) {
    //console.error('Error in sendOTP:', error);
    throw(error)
  }
}

const deleteOTP = async (email) => {
  try {
    await OTP.deleteOne({ email })
  } catch (error) {
    throw error
  }
}

//export { sendOTPController, verifyOTPController }
export {
  sendOTPController,
  verifyOTPController,
  verifyOTP,
  sendOTP,
  deleteOTP,
};