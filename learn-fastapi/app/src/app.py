from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routes.student import router as StudentRouter
from src.routes.teacher import router as TeacherRouter
from src.routes.course import router as CourseRouter

app = FastAPI()

origins = [
    "*",
    # "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(StudentRouter, tags=["Student"], prefix="/student")
app.include_router(TeacherRouter, tags=["Teacher"], prefix="/teacher")
app.include_router(CourseRouter, tags=["Course"], prefix="/course")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

@app.get("/test", tags=["Root"])
async def read_root():
    return {"message": "Test to this fantastic app!"}