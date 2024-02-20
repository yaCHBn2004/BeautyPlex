from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

class UserInfo(BaseModel):
    name: str
    email: str
    city: str
    baladiya: str
    phoneNum: int

class ProductInfo(BaseModel):
    title: str
    price: float
    imgUrl: str

@app.post("/submit-form/")
async def submit_form(user_info: UserInfo, product_info: ProductInfo):
    try:
        send_email(user_info, product_info)
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))

    return {"message": "Form submitted successfully"}

# Function to send email
def send_email(user_info: UserInfo, product_info: ProductInfo):
    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    smtp_user = 'f_adjissi@estin.dz'
    smtp_pass = 'sama7niyaraby'
    sender_email = smtp_user
    receiver_email = 'f_adjissi@estin.dz'  
    
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = 'New Form Submission'

    email_body = f"""
    New Form Submission:
    Name: {user_info.name}
    Email: {user_info.email}
    City: {user_info.city}
    Phone: {user_info.phoneNum}
    Baladiya: {user_info.baladiya}

    Product Info:
    Title: {product_info.title}
    Price: {product_info.price}
    Image URL: {product_info.imgUrl}
    """

    message.attach(MIMEText(email_body, 'plain'))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(message)
