import React from "react";
import { useGlobleContext } from "../Context";
const Favorites = () => {
    const {favorites, selectMeal, removeToFavorites} = useGlobleContext()
  return (
    <section className="favorites">
        <div  className="favorites-content">
            <h5>Favorites</h5>
            <div className="favorites-container">
                {favorites.map((item) => {
                    const {idMeal, strMealThumb: image} = item;
                    return (
                        <div key={idMeal} className='favorite-item'>
                            <img onClick={() => selectMeal(idMeal, true)} src={image} className='favorites-img img' alt="favorite-img"/>
                            <button className="remove-btn" onClick={() => removeToFavorites(idMeal)}>remove</button>
                        </div>
                        )
                })}
            </div>
        </div>
    </section>
  );
};

export default Favorites;
