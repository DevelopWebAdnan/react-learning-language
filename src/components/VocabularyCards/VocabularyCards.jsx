import { useRef } from 'react';
import pronounceWord from '../../utilities/pronounceWord';

const VocabularyCards = ({ matchingVocabulary }) => {
    // console.log("props=> matchingVocabulary ", matchingVocabulary);

    const { word, meaning, pronunciation, part_of_speech, Lesson_no, difficulty, when_to_say, example, Id } = matchingVocabulary;
    // console.log('Word:', word, 'Meaning:', meaning, 'Pronunciation:', pronunciation, 'Part of speech:', part_of_speech, 'Lesson no:', Lesson_no, difficulty, 'When to say:', when_to_say, 'Example:', example, 'Id:', Id)

    const modalRef = useRef(null)

    const openModal = () => {
        // console.log('Clicked on the When to say button', Id, word, meaning, when_to_say, example);

        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div>
            <div onClick={() => pronounceWord(`${word}`)}>
                <div className={`card text-primary-content w-3xs md:w-2xs lg:w-xs 
${difficulty === 'easy' ? 'bg_easy' : (difficulty === 'medium' ? 'bg_medium' : 'bg_difficult')}`}>
                    <div className="card-body">
                        <h2 className="card-title">Word: {word}</h2>
                        <p className='md:text-lg lg:text-xl'>Meaning: {meaning}</p>
                        <p className='md:text-lg lg:text-xl'>Pronunciation: {pronunciation}</p>
                        <p className='md:text-lg lg:text-xl'>Part of speech: {part_of_speech}</p>
                        <div className="card-actions justify-end">

                            <button className="btn font-bold text-base-100 bg-[#5FCF80]" onClick={() => openModal()}>When To Say</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Word: {word}</h3>
                    <p className="pt-4 md:pt-5 lg:pt-6 font-bold md:text-lg lg:text-xl">Meaning: {meaning}</p>
                    <p className="py-4 md:py-5 lg:py-6 font-semibold md:text-lg lg:text-xl">When to say: {when_to_say}</p>
                    <p className="font-semibold md:text-lg lg:text-xl">Example: {example}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn text-base-100 bg-[#5FCF80]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </div>
    );
};

export default VocabularyCards;