import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import VocabularyCards from '../../components/VocabularyCards/VocabularyCards';

const Lesson = () => {
    const vocabularies = useLoaderData();
    // console.log(vocabularies);

    const { lesson } = useParams();
    // console.log(lesson);

    const [matchingVocabularies, setMatchingVocabularies] = useState([]);

    useEffect(() => {
        const matchingVocabularyCards = [...vocabularies].filter(vocabularyCard => vocabularyCard.Lesson_no == lesson);
        console.log(matchingVocabularyCards);
       
        setMatchingVocabularies(matchingVocabularyCards);
        // console.log(matchingVocabularies);
        
        // console.log(matchingLessons(vocabularyLessons, lesson));
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
                        matchingVocabularies.map(matchingVocabulary =>
                            <VocabularyCards key={matchingVocabulary.Id} matchingVocabulary={matchingVocabulary}>
                            </VocabularyCards>
                        )
                    }
                </div>
            </section>

            <div className='text-center mb-4 md:mb-5'>
                <button className="btn btn-outline btn-lg" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default Lesson;