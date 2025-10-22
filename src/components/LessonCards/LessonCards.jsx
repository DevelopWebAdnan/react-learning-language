import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import noDuplicate from '../../utilities/noDuplicate';

const LessonCards = () => {
    const vocabularies = useLoaderData();
    // console.log(vocabularies);

    const [uniqueLessons, setUniqueLessons] = useState([]);

    useEffect(() => {
        const lessons = vocabularies.map(vocabularyCard => vocabularyCard.Lesson_no);
        // console.log(lessons);

        let uniqueItems = [];
        for (const lesson of lessons) {
            // console.log(lesson);
            if (uniqueItems.includes(lesson)) {
                continue;
            }
            else {
                uniqueItems.push(lesson);
            }
        }
        console.log(uniqueItems);

        setUniqueLessons(uniqueItems);
        //    noDuplicate(lessons);
    }, [vocabularies])

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7 justify-center'>
            {/* {
                uniqueLessons.map(uniqueLesson => <LessonCard key={uniqueLesson} uniqueLesson={uniqueLesson}></LessonCard>)
            } */}
            {
                uniqueLessons.map(uniqueLesson =>
                    <div key={uniqueLesson} className="card w-36 bg-base-100 card-md shadow-sm">
                        <Link to={`/startLearning/${uniqueLesson}`}>
                            <div className="card-body">
                                {
                                    <h2 className="card-title">Lesson {uniqueLesson}</h2>
                                }
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default LessonCards;