import { useEffect, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import Tutorial from '../../components/Tutorial/Tutorial';
import { useLoaderData } from 'react-router-dom';
import LessonCards from '../../components/LessonCards/LessonCards';

const StartLearning = () => {
    const vocabularies = useLoaderData();
    
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
            // console.log(uniqueItems);
            setUniqueLessons(uniqueItems);
    }, [vocabularies])

    return (
        <div className='my-14 md:my-16 lg:my-20 bg_symbol-scatter'>
            <title>Start Learning | Lingo Bingo</title>
            <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading subtitle="Start Learning"></Heading>
                        <Heading title="Let's Learn"></Heading>
                    </div>
                </div>
            </div>

            {/* 10 static cards */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-7 justify-center items-center'>
                {
                    uniqueLessons.map(uniqueLesson =>
                        <LessonCards key={uniqueLesson} uniqueLesson={uniqueLesson}></LessonCards>
                    )
                }
            </div>

            {/* Tutorial section */}
            <section className='my-14 md:my-16 lg:my-20'>
                <Tutorial></Tutorial>
            </section>
        </div>
    );
};

export default StartLearning;