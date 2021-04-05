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
  console.log("Email parameters ->>>>>", msg);
  return sendgridMail
    .send(msg)
    .then(() => {
      console.log("email sent");
    })
    .catch((error) => {
      if (error.response) {
        // Extract error msg
        const { message, code, response } = error;

        // Extract response msg
        const { headers, body } = response;

        console.error(body);
      }
    });
};
