from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from src.helpers.course import (
    add_course,
    delete_course,
    retrieve_course,
    retrieve_courses,
    update_course,
)
from src.models.course import (
    ErrorResponseModel,
    ResponseModel,
    CourseSchema,
    UpdateCourseModel,
)

router = APIRouter()


@router.post("/", response_description="course data added into the database")
async def add_course_data(course: CourseSchema = Body(...)):
    course = jsonable_encoder(course)
    new_course = await add_course(course)
    return ResponseModel(new_course, "course added successfully.", 201)


@router.get("/", response_description="Teachers retrieved")
async def get_courses():
    teachers = await retrieve_courses()
    if teachers:
        return ResponseModel(teachers, "Teachers data retrieved successfully", 200)
    return ResponseModel(teachers, "Empty list returned",204)


@router.get("/{id}", response_description="course data retrieved")
async def get_course_data(id):
    course = await retrieve_course(id)
    if course:
        return ResponseModel(course,  "course data retrieved successfully",200)
    return ErrorResponseModel("An error occurred.", 404, "course doesn't exist.")


@router.put("/{id}")
async def update_course_data(id: str, req: UpdateCourseModel = Body(...)):
    req = {k: v for k, v in req.dict().items() if v is not None}
    updated_course = await update_course(id, req)
    if updated_course:
        return ResponseModel(
            "course with ID: {} name update is successful".format(id),
            "course name updated successfully",
            200
        )
    return ErrorResponseModel(
        "An error occurred",
        "There was an error updating the course data.",
        404
    )


@router.delete("/{id}", response_description="course data deleted from the database")
async def delete_course_data(id: str):
    deleted_course = await delete_course(id)
    if deleted_course:
        return ResponseModel(
            "course with ID: {} removed".format(id), "course deleted successfully", 200
        )
    return ErrorResponseModel(
        "An error occurred", 404, "course with id {0} doesn't exist".format(id)
    )