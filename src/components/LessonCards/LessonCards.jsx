import { Link } from 'react-router-dom';

const LessonCards = ({ uniqueLesson }) => {

    return (
        <div key={uniqueLesson} className="card w-full md:w-36 bg-base-100 card-md shadow-sm">
            <Link to={`/startLearning/lessons/${uniqueLesson}`}>
                <div className="card-body">
                    {
                        <h2 className="card-title">Lesson {uniqueLesson}</h2>
                    }
                </div>
            </Link>
        </div>
    );
};

export default LessonCards;