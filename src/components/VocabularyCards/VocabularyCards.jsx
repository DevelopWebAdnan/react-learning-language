import React from 'react';

const VocabularyCards = ({ matchingVocabulary }) => {
    console.log("props=> matchingVocabulary ", matchingVocabulary);

    const { word, meaning, pronunciation, part_of_speech, Lesson_no, difficulty } = matchingVocabulary;

    return (
        <div className={`card text-primary-content w-3xs md:w-2xs lg:w-xs 
${difficulty==='easy' ? 'bg_easy' : (difficulty==='medium' ? 'bg_medium' : 'bg_difficult')}`}>
            <div className="card-body">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-rose-700">Lesson No: {Lesson_no} </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-rose-700">Difficulty: {difficulty} </p>
                <h2 className="card-title">Word: {word}</h2>
                <p>Meaning: {meaning}</p>
                <p>Pronunciation: {pronunciation}</p>
                <p>Part of speech: {part_of_speech}</p>
                <div className="card-actions justify-end">
                    <button className="btn">When To Say</button>
                </div>
            </div>
        </div>
    );
};

export default VocabularyCards;