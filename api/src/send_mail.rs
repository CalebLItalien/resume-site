use lettre::{
    Message, 
    SmtpTransport, 
    Transport,
    transport::smtp::authentication::Credentials,
};
use std::env;

pub async fn send_email(user_email: &str, user_name: &str, user_message: &str) 
  -> Result<(), Box<dyn std::error::Error>> {

    let smtp_server = env::var("SMTP_SERVER").expect("SMTP_SERVER must be set");
    let smtp_username = env::var("SMTP_USERNAME").expect("SMTP_USERNAME must be set");
    let smtp_password = env::var("SMTP_PASSWORD").expect("SMTP_PASSWORD must be set");
    let no_reply_email = env::var("NO_REPLY_EMAIL").expect("NO_REPLY_EMAIL must be set");
    let inbox_email = env::var("INBOX_EMAIL").expect("INBOX_EMAIL must be set");
    
    let email_body = format!("Message from: {} <{}>\n\n{}", user_name, user_email, user_message);

    let email = Message::builder()
        .from(no_reply_email.parse().unwrap())
        .reply_to(user_email.parse().unwrap()) 
        .to(inbox_email.parse().unwrap()) 
        .subject("New Contact Form Submission")
        .body(email_body)?;

    let mailer = SmtpTransport::relay(&smtp_server)?
        .credentials(Credentials::new(smtp_username, smtp_password))
        .build();
    mailer.send(&email)?;

    Ok(())
}
