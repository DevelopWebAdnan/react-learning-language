import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Lesson from '../../pages/Lesson/Lesson';
import LessonCard from '../LessonCard/LessonCard';
// import noDuplicate from '../../utilities/noDuplicate';

const LessonCards = () => {
    const vocabularies = useLoaderData();
    console.log(vocabularies);

    const [uniqueLessons, setUniqueLessons] = useState([]);
    
    useEffect(() => {
        const lessons = vocabularies.map(vocabularyCard => vocabularyCard.Lesson_no);
        console.log(lessons);

        let uniqueItems=[];
        for(const lesson of lessons) {
            console.log(lesson);
            if(uniqueItems.includes(lesson)) {
                continue;
            }
            else {
                uniqueItems.push(lesson);
            }
            console.log(uniqueItems);
        }

        setUniqueLessons(uniqueItems);
        //    noDuplicate(lessons);
    }, [vocabularies])

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7 justify-center'>
            {
                uniqueLessons.map(uniqueLesson => <LessonCard key={uniqueLesson} uniqueLesson={uniqueLesson}></LessonCard>)
            }

            {/* <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7'>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 1</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 2</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 3</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 4</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 5</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 6</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 7</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 8</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 9</h2>
                    </div>
                </div>
                <div className="card w-36 bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Lesson 10</h2>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default LessonCards;