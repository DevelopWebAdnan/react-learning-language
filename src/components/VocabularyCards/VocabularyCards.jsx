import React from 'react';

const VocabularyCards = ({ vocabulary }) => {
    console.log(vocabulary);

    const { word, meaning, pronunciation, part_of_speech, Lesson_no } = vocabulary;

    //    const [vocabularyCards, setVocabularyCards] = useState({}); 

    // useEffect(() => {
    //     const VocabularyCard = 
    //     }, [])

    return (
        <div className="card bg-primary text-primary-content w-3xs md:w-2xs lg:w-xs">
            <div className="card-body">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-rose-700">Lesson No: {Lesson_no} </p>
                <h2 className="card-title">Word: {word}</h2>
                <p>Meaning: {meaning}</p>
                <p>Pronunciation: {pronunciation}</p>
                <p>Parts of speech: {part_of_speech}</p>
                <div className="card-actions justify-end">
                    <button className="btn">When To Say</button>
                </div>
            </div>
        </div>
    );
};

export default VocabularyCards;