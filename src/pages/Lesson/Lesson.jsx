import React from 'react';
import Heading from '../../components/Heading/Heading';
import { useLoaderData } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const Lesson = () => {
    const vocabularies = useLoaderData();
    console.log(vocabularies);
    const vocabularyCards = vocabularies.map(vocabularyCard => vocabularyCard);
    console.log(vocabularyCards);
    
    return (
        <div>
             <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading subtitle="Tutorial"></Heading>
                        {/* <p>{tutorial.word}</p> */}
                        {/* <Heading title={`Lesson No.${Lesson_no}`}></Heading> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lesson;