import React from 'react';
import css from './Stars.module.css'

const Stars = () => {
  return (
    <div className={css.container}>
      <div className={css.starRating}>
        <div className={css.starRatingWrap}>
          <input className={css.starRatingInput} id="star-rating-5" type="radio" name="rating" value="5" />
          <label className={`${css.starRatingIco} fa fa-star-o fa-lg`} for="star-rating-5" title="5 out of 5 stars"></label>
          <input className={css.starRatingInput} id="star-rating-4" type="radio" name="rating" value="4" />
          <label className={`${css.starRatingIco} fa fa-star-o fa-lg`} for="star-rating-4" title="4 out of 5 stars"></label>
          <input className={css.starRatingInput} id="star-rating-3" type="radio" name="rating" value="3" />
          <label className={`${css.starRatingIco} fa fa-star-o fa-lg`} for="star-rating-3" title="3 out of 5 stars"></label>
          <input className={css.starRatingInput} id="star-rating-2" type="radio" name="rating" value="2" />
          <label className={`${css.starRatingIco} fa fa-star-o fa-lg`} for="star-rating-2" title="2 out of 5 stars"></label>
          <input className={css.starRatingInput} id="star-rating-1" type="radio" name="rating" value="1" />
          <label className={`${css.starRatingIco} fa fa-star-o fa-lg`} for="star-rating-1" title="1 out of 5 stars"></label>
        </div>
      </div>
      <p className={css.ratingReviews}>12K Reviews</p>
    </div>
  );
};

export default Stars;

// fa fa-star-o fa-lg
// fa fa-star-o fa-lg
// fa fa-star-o fa-lg
// fa fa-star-o fa-lg
// fa fa-star-o fa-lg