import os
from dotenv import load_dotenv
import motor.motor_asyncio
# from decouple import config

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", default=None)
DATABASE_NAME = os.getenv("DATABASE_NAME", default=None)

# MONGO_URI = config("MONGO_URI")  # read environment variable
# DATABASE_NAME = config("DATABASE_NAME")  # read environment variable

try:
    client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
    database = client[DATABASE_NAME]
    print("🚀 Successfully connected to MongoDB")
except Exception as e:
    print(f"Failed to connect to MongoDB. Error: {e}")
    # Handle the error or raise an exception if needed




student_collection = database.get_collection("students")
teacher_collection = database.get_collection("teachers")
course_collection = database.get_collection("courses")

