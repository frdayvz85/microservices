from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field
from src.models.course import CourseSchema


class TeacherSchema(BaseModel):
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    owned_courses: List[CourseSchema] = Field(...)
    years_of_experience: int = Field(..., gt=0)
    qualification: str = Field(...)

    class Config:
        json_schema_extra = {
            "example": {
                "fullname": "Jane Smith",
                "email": "jsmith@x.edu.ng",
                "owned_courses": [
                    {
                        "name": "Computer Science 101",
                        "code": "CS101",
                        "description": "Introduction to Computer Science",
                    },
                    # Additional owned courses can be added
                ],
                "years_of_experience": 5,
                "qualification": "Ph.D. in Computer Science",
            }
        }


class UpdateTeacherModel(BaseModel):
    fullname: Optional[str]
    email: Optional[EmailStr]
    owned_courses: Optional[List[dict]]  # Assuming a list of courses
    years_of_experience: Optional[int]
    qualification: Optional[str]

    class Config:
        json_schema_extra = {
            "example": {
                "fullname": "Updated Jane Smith",
                "email": "updated_jsmith@x.edu.ng",
                "owned_courses": [
                    {
                        "name": "Updated Computer Science 101",
                        "code": "CS101",
                        "description": "Updated Introduction to Computer Science",
                    },
                    # Additional updated owned courses can be added
                ],
                "years_of_experience": 6,
                "qualification": "Updated Ph.D. in Computer Science",
            }
        }


def ResponseModel(data, message, code=200):
    return {
        "data": [data],
        "code": code,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}