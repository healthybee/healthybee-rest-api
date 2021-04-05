import sendgridMail from "@sendgrid/mail";
import { sendgridKey, defaultEmail } from "../../config";

sendgridMail.setApiKey(sendgridKey);

export const sendMail = ({
  fromEmail = defaultEmail,
  toEmail,
  subject,
  content,
}) => {
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject,
    html: content,
  };
  console.log("email send called with", msg);
  return sendgridMail.send(msg);
};
