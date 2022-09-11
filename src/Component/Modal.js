import React from 'react';
import { useGlobleContext } from '../Context';

const Modal = () => {
    const { selectedMeal, closeModal } = useGlobleContext()
    const { strMealThumb: image,
            strMe: title, 
            strInstructions: text, 
            strSource: source
        } = selectedMeal

    return (
        <aside className='modal-overlay'>
            <div className='modal-container '>
                <img src={image} alt={title} className='img modal-img'/>
                <div className='modal-content'>
                    <h4>{title}</h4>
                    <p>Cooking Instructions</p>
                    <p>{text}</p>
                    <a href={source} target="-blank">Original Source</a>
                    <button onClick={closeModal} className='close-btn'>close</button>
                </div>
                
            </div>
        </aside>
    );
};

export default Modal;