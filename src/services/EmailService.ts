interface IMailTo {
  name: string
  email: string
}

interface IMailMessage {
  subject: string
  body: string
  attachment?: string[]
}

interface MessageDTO {
  to: IMailTo,
  message: IMailMessage
}

class EmailService {
  sendMail({ to, message }: MessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailService