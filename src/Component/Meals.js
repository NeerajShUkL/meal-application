import React from 'react';
import { useGlobleContext } from '../Context';
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () => {

    const {meals,
         loading, 
         selectMeal,
         addToFavorites, } = useGlobleContext()
    


    let logingText = 
        <section className="section justify-content-center">
        <h4 className='text-center'>Loading....</h4>
        </section>
    
    let notFoundText = 
    <section className="section justify-content-center">
    <h4 className='text-center'>No meals matched your search term. Please try again.</h4>
    </section>

    let singleMealCard = meals.map((singleMeal) => {
        const {idMeal, strMeal: title, strMealThumb: image} = singleMeal
        return (
            <article key={idMeal} className='single-meal'>
                <img src={image} className="img" alt="singleMealImg" onClick={() => selectMeal(idMeal)}/>
                <footer>
                    <h5>{title}</h5>
                    <button className='like-btn' onClick={() => addToFavorites(idMeal)}><BsHandThumbsUp/></button>
                </footer>
            </article>
            )
        
       })
    return (
        
        <section className='section-center'>
           {loading? logingText : (meals.length < 1 ? notFoundText : singleMealCard )}
        </section>

    );
};

export default Meals;