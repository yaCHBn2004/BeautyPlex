from fastapi import FastAPI, Form
from pydantic import BaseModel
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = FastAPI()

class UserInfo(BaseModel):
    name: str
    email: str

@app.post("/submit-form/")
async def submit_form(user_info: UserInfo = Form(...)):
    # Process the form data (e.g., save to database, send email, etc.)
    send_email(user_info)
    return {"message": "Form submitted successfully"}

def send_email(user_info: UserInfo):
    # Setup SMTP parameters
    smtp_host = 'your_smtp_host'
    smtp_port = 587
    smtp_user = 'your_smtp_user'
    smtp_pass = 'your_smtp_password'
    sender_email = 'your_sender_email'
    receiver_email = 'adjissifatimaamina@gmial.com'

    # Create the message
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'New Form Submission'

    # Construct the email body
    email_body = f"""
    New Form Submission:
    Name: {user_info.name}
    Email: {user_info.email}
    """

    # Attach the email body
    message.attach(MIMEText(email_body, 'plain'))

    # Connect to SMTP server and send email
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(message)

    # Alternatively, you can use try-except to handle SMTP exceptions
