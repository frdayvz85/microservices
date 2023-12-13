from src.db import course_collection
from bson.objectid import ObjectId
# helpers


def course_helper(course) -> dict:
    return {
        "id": str(course["_id"]),
        "name": course["name"],
        "code": course["code"],
        "description": course["description"]
    }

# crud operations


# Retrieve all courses present in the database
async def retrieve_courses():
    courses = []
    async for course in course_collection.find():
        courses.append(course_helper(course))
    return courses


# Add a new course into to the database
async def add_course(course_data: dict) -> dict:
    course = await course_collection.insert_one(course_data)
    new_course = await course_collection.find_one({"_id": course.inserted_id})
    return course_helper(new_course)


# Retrieve a course with a matching ID
async def retrieve_course(id: str) -> dict:
    course = await course_collection.find_one({"_id": ObjectId(id)})
    if course:
        return course_helper(course)


# Update a course with a matching ID
async def update_course(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    course = await course_collection.find_one({"_id": ObjectId(id)})
    if course:
        updated_course = await course_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_course:
            return True
        return False


# Delete a course from the database
async def delete_course(id: str):
    course = await course_collection.find_one({"_id": ObjectId(id)})
    if course:
        await course_collection.delete_one({"_id": ObjectId(id)})
        return True