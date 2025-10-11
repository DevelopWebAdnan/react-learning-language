import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Lesson from '../../pages/Lesson/Lesson';
import LessonCard from '../LessonCard/LessonCard';

const LessonCards = () => {
    const vocabularies = useLoaderData();
    console.log(vocabularies);

    // const [uniqueLessonNo, setUniqueLessonNo] = useState([]);

    useEffect(() => {
        //    const uniqueLessonNo = vocabularyLessonNo.find(vocabularyLessonNo === );
        //    console.log(uniqueLessonNo);
    }, [])

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7'>
            {
                vocabularies.map(vocabulary => <LessonCard key={vocabulary.Id} vocabularyLessonNo={vocabulary.Lesson_no}></LessonCard>)
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