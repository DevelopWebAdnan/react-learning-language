import React, { useEffect } from 'react';
import Heading from '../../components/Heading/Heading';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import VocabularyCards from '../../components/VocabularyCards/VocabularyCards';

const Lesson = () => {
    const vocabularies = useLoaderData();
    console.log(vocabularies);

    const { lesson } = useParams();
    console.log(lesson);

    // const [matchingLessons, setMatchingLessons] = useState({});

     useEffect(() => {
            const vocabularyLessons = vocabularies.map(vocabularyCard => vocabularyCard.Lesson_no);
            console.log(vocabularyLessons);
            let matchingLessonsArray = [];
            for(const vocabularyLesson of vocabularyLessons) {
                console.log(vocabularyLesson);
                if(vocabularyLesson == lesson) {
                    matchingLessonsArray.push(vocabularyLesson);
                }
                else {
                    continue;
                }
            }

            console.log("matchingLessonsArray: ", matchingLessonsArray);
            // setMatchingLessons(matchingLessonsArray);
            // console.log(matchingLessons);
            // const matchingLessonCards = vocabularyLessons.filter(vocabularyLesson => vocabularyLessons === matchingLessons)
            // console.log(matchingLessonCards);
            }, [lesson, vocabularies])

    const navigate = useNavigate();

    return (
        <div>
            <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading subtitle="Tutorial"></Heading>
                        <Heading title={`Lesson No.${lesson}`}></Heading>
                    </div>
                </div>
            </div>

            <section className='my-14 md:my-16 lg:my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 justify-center'>
                    {
                        vocabularies.map(vocabulary =>
                            <VocabularyCards key={vocabulary.Id} vocabulary={vocabulary}>
                            </VocabularyCards>
                        )
                    }
                </div>
            </section>

            <div className='text-center mb-4 md:mb-5'>
                <button className="btn btn-outline btn-lg" onClick={() => navigate(-1)}>Back To Lesson</button>
            </div>
        </div>
    );
};

export default Lesson;