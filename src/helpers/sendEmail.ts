import nodemailer from "nodemailer"

export const SendEmail = async ({emailType, email, userId}: any) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
              pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
            },
            host: "smtp.forwardemail.net",
            port: 465,
            secure: true,
          });
          

    } catch(error: any) {
        throw new Error(error.message)
    }
}