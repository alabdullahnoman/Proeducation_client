import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const CategoryCourse = () => {
    const CategoryCourse =useLoaderData()
    return (
        <div>
            {
                CategoryCourse.map(course=><CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default CategoryCourse;