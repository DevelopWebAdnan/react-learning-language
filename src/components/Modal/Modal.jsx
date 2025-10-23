import React from 'react';
import { useParams } from 'react-router-dom';

const Modal = ({ word, meaning, when_to_say, example }) => {
    console.log('Props=> Word:', word, 'Meaning:', meaning, 'When to say:', when_to_say, 'Example:', example)

    const params = useParams();
    console.log(params);

    return (
        <div>
            {/* document.getElementById("my_modal").showModal() */}
            
            <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Word: {word}</h3>
                <p className="py-4 md:py-5 lg:py-7 font-bold md:text-lg lg:text-xl">Meaning: {meaning}</p>
                <p className="py-4 md:py-5 lg:py-7 font-semibold md:text-lg lg:text-xl">When to say: {when_to_say}</p>
                <p className="py-4 font-semibold md:text-lg lg:text-xl">Example: {example}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog >
        </div>
    );
};

export default Modal;