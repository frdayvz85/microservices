from src.db import teacher_collection
from bson.objectid import ObjectId
# helpers


def teacher_helper(teacher) -> dict:
    return {
        "id": str(teacher["_id"]),
        "fullname": teacher["fullname"],
        "email": teacher["email"],
        "owned_courses": teacher["owned_courses"],
        "years_of_experience": teacher["years_of_experience"],
        "qualification": teacher["qualification"],
    }


# crud operations


# Retrieve all teachers present in the database
async def retrieve_teachers():
    teachers = []
    async for teacher in teacher_collection.find():
        teachers.append(teacher_helper(teacher))
    return teachers


# Add a new teacher into to the database
async def add_teacher(student_data: dict) -> dict:
    teacher = await teacher_collection.insert_one(student_data)
    new_teacher = await teacher_collection.find_one({"_id": teacher.inserted_id})
    return teacher_helper(new_teacher)


# Retrieve a teacher with a matching ID
async def retrieve_teacher(id: str) -> dict:
    teacher = await teacher_collection.find_one({"_id": ObjectId(id)})
    if teacher:
        return teacher_helper(teacher)


# Update a teacher with a matching ID
async def update_teacher(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    teacher = await teacher_collection.find_one({"_id": ObjectId(id)})
    if teacher:
        updated_student = await teacher_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_student:
            return True
        return False


# Delete a teacher from the database
async def delete_teacher(id: str):
    teacher = await teacher_collection.find_one({"_id": ObjectId(id)})
    if teacher:
        await teacher_collection.delete_one({"_id": ObjectId(id)})
        return True