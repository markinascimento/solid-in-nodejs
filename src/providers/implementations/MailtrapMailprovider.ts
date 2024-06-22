import Mail from "nodemailer/lib/mailer";
import nodemailer from 'nodemailer'
import { IMailProvider, IMessage } from "../IMailProvider";

export class MailtrapMailprovider implements IMailProvider {
  private transproter: Mail;

  constructor() {
    this.transproter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "73afb5084c39b2",
        pass: "baf7425c69c2ae"
      }
    })
  }
  
  async sendMail(message: IMessage): Promise<void> {
    await this.transproter.sendMail({
      to: {
        address: message.to.email,
        name: message.to.name
      },
      from: {
        address: message.from.email,
        name: message.from.name
      },
      subject: message.subject,
      html: message.body
    })
  }
}
