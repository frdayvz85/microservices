from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from src.helpers.teacher import (
    add_teacher,
    delete_teacher,
    retrieve_teacher,
    retrieve_teachers,
    update_teacher,
)
from src.models.teacher import (
    ErrorResponseModel,
    ResponseModel,
    TeacherSchema,
    UpdateTeacherModel,
)

router = APIRouter()


@router.post("/", response_description="Teacher data added into the database")
async def add_teacher_data(teacher: TeacherSchema = Body(...)):
    teacher = jsonable_encoder(teacher)
    new_teacher = await add_teacher(teacher)
    return ResponseModel(new_teacher, "Teacher added successfully.", 201)


@router.get("/", response_description="Teachers retrieved")
async def get_teachers():
    teachers = await retrieve_teachers()
    if teachers:
        return ResponseModel(teachers, "Teachers data retrieved successfully", 200)
    return ResponseModel(teachers, "Empty list returned",204)


@router.get("/{id}", response_description="Teacher data retrieved")
async def get_teacher_data(id):
    teacher = await retrieve_teacher(id)
    if teacher:
        return ResponseModel(teacher,  "Teacher data retrieved successfully",200)
    return ErrorResponseModel("An error occurred.", 404, "Teacher doesn't exist.")


@router.put("/{id}")
async def update_teacher_data(id: str, req: UpdateTeacherModel = Body(...)):
    req = {k: v for k, v in req.dict().items() if v is not None}
    updated_teacher = await update_teacher(id, req)
    if updated_teacher:
        return ResponseModel(
            "Teacher with ID: {} name update is successful".format(id),
            "Teacher name updated successfully",
            200
        )
    return ErrorResponseModel(
        "An error occurred",
        "There was an error updating the teacher data.",
        404
    )


@router.delete("/{id}", response_description="Teacher data deleted from the database")
async def delete_teacher_data(id: str):
    deleted_teacher = await delete_teacher(id)
    if deleted_teacher:
        return ResponseModel(
            "Teacher with ID: {} removed".format(id), "Teacher deleted successfully", 200
        )
    return ErrorResponseModel(
        "An error occurred", 404, "Teacher with id {0} doesn't exist".format(id)
    )