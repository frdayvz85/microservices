import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Course {
    id: string;
    name: string;
    code: string;
    description: string;
}

interface CourseData {
    data: Course[][]
    code: number;
    message: string
}

const Courses: React.FC = () => {
    const [courses, setCourses] = useState<CourseData | undefined>(undefined);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get<CourseData>(`${import.meta.env.VITE_SERVER_URL}/education/course`);

                // Check the status code before updating state
                if (response.data.code === 200) {
                    setCourses(response.data);
                    console.log(response.data)
                } else {
                    console.error('Error fetching courses:', response.data.message);
                }

            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);


    return (
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses?.data[0].map((course: Course) => (
                    <div className="p-20 bg-purple-100 w-full ">
                        <h3 className="text-purple-300 font-bold mb-4">{course.name}</h3>
                        <div className="bg-white rounded-lg shadow-lg">
                            <img src="https://www.freecodecamp.org/news/content/images/2020/03/illustration_cover.png" alt="" className="rounded-t-lg" />
                            <div className="p-6">
                                <h2 className="font-bold mb-2 text-2xl text-purple-800">{course.code}
                                </h2>
                                <p className="text-purple-700 mb-2">{course.description}</p>
                            </div>

                        </div>
                    </div>

                ))}
        </div>
    );
};

export default Courses;
