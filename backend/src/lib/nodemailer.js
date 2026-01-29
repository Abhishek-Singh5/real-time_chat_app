import nodemailer from 'nodemailer';
import { ENV } from './env.js';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: ENV.SMTP_USER,
        pass: ENV.SMTP_PASS,
    }
});


export default transporter;
