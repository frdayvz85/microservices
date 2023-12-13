from typing import Optional
from pydantic import BaseModel


class CourseSchema(BaseModel):
    name: str
    code: str
    description: str

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Computer Science 101",
                "code": "CS101",
                "description": "Introduction to Computer Science",
            }
        }


class UpdateCourseModel(BaseModel):
    name: Optional[str]
    code: Optional[str]
    description: Optional[str]

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Updated Computer Science 101",
                "code": "CS101",
                "description": "Updated Introduction to Computer Science",
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