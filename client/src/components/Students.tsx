import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Course {
    name: string;
    code: string;
    description: string;
}

interface Student {
    id: string;
    fullname: string;
    email: string;
    courses_enrolled: Course[];
    year: number;
    GPA: number;
}

interface StudentData {
    data: Student[][]
    code: number;
    message: string
}

const Students: React.FC = () => {
    const [students, setStudents] = useState<StudentData | undefined>(undefined);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get<StudentData>(`${import.meta.env.VITE_SERVER_URL}/education/student`);

                if (response.data.code === 200) {
                    setStudents(response.data);
                    console.log(response.data)
                } else {
                    console.error('Error fetching students:', response.data.message);
                }

            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);


    return (
        <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                students?.data[0].map((student: Student) => (
                    <div key={student.id} className="p-10 bg-blue-100">
                        <h3 className="text-blue-300 mb-4 text-sm font-bold">
                            {student.fullname}
                        </h3>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{student.email}</h2>
                            <div className="mb-2">
                                <p className="text-gray-600 font-semibold">Enrolled Courses:</p>
                                <ul>
                                    {student.courses_enrolled.map((course, index) => (
                                        <li key={index}>
                                            <strong>{course.name}</strong> - {course.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 mb-2">Year: {student.year}</p>
                            <p className="text-gray-600 mb-2">GPA: {student.GPA}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Students;
