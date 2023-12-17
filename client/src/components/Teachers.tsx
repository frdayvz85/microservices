import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Teacher {
    id: string;
    fullname: string;
    email: string;
    owned_courses: Array<{
        name: string;
        code: string;
        description: string;
    }>;
    years_of_experience: number;
    qualification: string;
}

interface TeacherData {
    data: Teacher[][]
    code: number;
    message: string
}

const Teachers: React.FC = () => {
    const [teachers, setTeachers] = useState<TeacherData | undefined>(undefined);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get<TeacherData>(`${import.meta.env.VITE_SERVER_URL}/education/teacher`);

                if (response.data.code === 200) {
                    setTeachers(response.data);
                    console.log(response.data)
                } else {
                    console.error('Error fetching teachers:', response.data.message);
                }

            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teachers?.data[0].map((teacher: Teacher) => (
                <div key={teacher.id} className="p-10 bg-teal-300">
                    <h3 className="mb-4 text-sm font-bold">
                        {teacher.fullname}
                    </h3>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{teacher.email}</h2>
                        <h4 className="text-xl font-medium mb-2 text-gray-800">{teacher.qualification}</h4>
                        <p className="text-gray-600 mb-2">Years of Experience: {teacher.years_of_experience}</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Courses Owned:</h3>
                            <ul className="list-disc pl-5">
                                {teacher.owned_courses.map((course) => (
                                    <li key={course.code}>{`${course.name} - ${course.description}`}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Teachers;
