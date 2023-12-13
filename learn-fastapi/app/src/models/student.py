from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field
from src.models.course import CourseSchema


class StudentSchema(BaseModel):
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    courses_enrolled: List[CourseSchema] = Field(...)
    year: int = Field(..., gt=0, lt=9)
    gpa: float = Field(..., le=4.0)

    class Config:
        json_schema_extra = {
            "example": {
                "fullname": "John Doe",
                "email": "jdoe@x.edu.ng",
                "courses_enrolled": [
                    {
                        "name": "Computer Science 101",
                        "code": "CS101",
                        "description": "Introduction to Computer Science",
                    },
                    # Additional enrolled courses can be added
                ],
                "year": 2,
                "gpa": 3.0,
            }
        }

class UpdateStudentModel(BaseModel):
    fullname: Optional[str]
    email: Optional[EmailStr]
    courses_enrolled: Optional[List[dict]]  # Assuming a list of courses
    year: Optional[int]
    gpa: Optional[float]

    class Config:
        json_schema_extra = {
            "example": {
                "fullname": "John Doe",
                "email": "jdoe@x.edu.ng",
                "courses_enrolled": [
                    {
                        "name": "Computer Science 101",
                        "code": "CS101",
                        "description": "Introduction to Computer Science",
                    },
                    # Additional enrolled courses can be added
                ],
                "year": 4,
                "gpa": 4.0,
            }
        }

# class StudentSchema(BaseModel):
#     fullname: str = Field(...)
#     email: EmailStr = Field(...)
#     course_of_study: str = Field(...)
#     year: int = Field(..., gt=0, lt=9)
#     gpa: float = Field(..., le=4.0)

#     class Config:
#         schema_extra = {
#             "example": {
#                 "fullname": "John Doe",
#                 "email": "jdoe@x.edu.ng",
#                 "course_of_study": "Water resources engineering",
#                 "year": 2,
#                 "gpa": "3.0",
#             }
#         }


# class UpdateStudentModel(BaseModel):
#     fullname: Optional[str]
#     email: Optional[EmailStr]
#     courses_enrolled: Optional[str]
#     year: Optional[int]
#     gpa: Optional[float]

#     class Config:
#         schema_extra = {
#             "example": {
#                 "fullname": "John Doe",
#                 "email": "jdoe@x.edu.ng",
#                 "course_of_study": "Water resources and environmental engineering",
#                 "year": 4,
#                 "gpa": "4.0",
#             }
#         }


def ResponseModel(data, message, code=200):
    return {
        "data": [data],
        "code": code,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}