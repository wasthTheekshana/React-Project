import React, { useState } from 'react';

const Tour = ({ id, name, info,image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
      <article className="single-tour">
          <img src={image} alt=""/>
          <footer>
            <div className="tour-info">
              <h4>{name}</h4>
              <h4 className="tour-price">{price}</h4>
            </div>
            <p className="tour-info">
              {info}
            </p>
            <button className="btn delete-btn" onClick={() => removeTour(id)}>
              Not intersted
            </button>
          </footer>
      </article>
  );
};

export default Tour;
