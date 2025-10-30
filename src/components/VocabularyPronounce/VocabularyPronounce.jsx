import { useLoaderData, useParams } from 'react-router-dom';
import pronounceWord from '../../utilities/pronounceWord';
import { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';

const VocabularyPronounce = () => {

    const vocabularies = useLoaderData();
    console.log(vocabularies);

    // const params = useParams();
    // console.log(params);
    const {id} = useParams();
    console.log(id);

    const [idmatchingCard, setIdMatchingCard] = useState([]);

    useEffect(() => {
        const idMatchingCard = vocabularies.find(vocabularyCard => vocabularyCard.Id == id);
        console.log(idMatchingCard);

        setIdMatchingCard(idMatchingCard);
    }, [id, vocabularies])

    console.log(idmatchingCard);

    return (
        <div>
            
            <div className="hero bg-[#5bc57a] min-h-11 py-6 md:py-7 mb-4 md:mb-5">
                <div className="hero-content text-center">
                    <div>
                        <Heading subtitle="Vocabulary Pronunciation"></Heading>
                        <Heading title={`Id No.${id}`}></Heading>
                    </div>
                </div>
            </div>

            {/* <section className='my-14 md:my-16 lg:my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 justify-center items-center'>
                    {
                        matchingVocabularies.map(matchingVocabulary =>
                            <VocabularyCards key={matchingVocabulary.Id} matchingVocabulary={matchingVocabulary}>
                            </VocabularyCards>
                        )
                    }
                </div>
            </section> */}

            {/* <div className='text-center mb-4 md:mb-5'>
                <button className="btn btn-outline btn-lg font-bold text-base-100 bg-[#5FCF80]" onClick={() => navigate("/startLearning")}>Back To Lesson</button>
            </div> */}

            <div className="bg-gray-100">

                <div className="container mx-auto p-10">
                    <h1 className="text-3xl font-bold text-center mb-6">Vocabulary Pronunciation</h1>
                    <p className="text-center text-gray-600">Follow Me & Hit Love 💓for More interesting feature implementation</p>


                    <div className="flex flex-wrap justify-center">
                        {/* Vocabulary Cards */}
                        <div className="card" onClick={pronounceWord('يلعب')}>
                            <h2 className="text-xl font-semibold">يلعب</h2>
                            <p>to play</p>
                        </div>

                        <div className="card" onClick={pronounceWord('يتكلم')}>
                            <h2 className="text-xl font-semibold">يتكلم</h2>
                            <p>to speak</p>
                        </div>

                        <div className="card" onClick={pronounceWord('يسأل')}>
                            <h2 className="text-xl font-semibold">يسأل</h2>
                            <p>to ask</p>
                        </div>

                        <div className="card" onClick={pronounceWord('おはよう')}>
                            <h2 className="text-xl font-semibold">おはよう</h2>
                            <p>Good Morning</p>
                        </div>
                    </div>
                </div>
                <p className=" flex gap-5 items-center text-gray-600 bg-red-100 py-2 mb-10">
                    <span className="bg-red-500 text-white  px-2 py-2"> Important Note:</span>If This Dont work then Goto your PC Setting -= Language and Download Japanese Speech pack or whatever language you want to hear. then It will work perfectly
                </p>

            </div>
        </div>
    );
};

export default VocabularyPronounce;