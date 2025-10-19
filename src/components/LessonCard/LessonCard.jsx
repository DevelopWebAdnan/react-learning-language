import React from 'react';
import Lesson from '../../pages/Lesson/Lesson';

const LessonCard = ({uniqueLesson}) => {
    console.log(uniqueLesson);
    
    return (
        <div>
            {/* <div>
                {
                    tutorials.map(tutorial => <Lesson key={tutorial.Id} tutorial={tutorial}></Lesson>)
                }
            </div> */}
            <div className="card w-36 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    {
                    <h2 className="card-title">Lesson {uniqueLesson}</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default LessonCard;