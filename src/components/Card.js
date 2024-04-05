import React from 'react'
import './Card.css'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Card(props) {
    let review = props.review;
    return (
        <div className='card'>
            <div >
                <img src={review.image} alt="image" />
                <div className="image"></div>
            </div>
            <div>
                <p className='name'>{review.name}</p>
            </div>
            <div>
                <p className='job'>{review.job}</p>
            </div>
            <div className='quotes'>
                <ImQuotesLeft />
            </div>

            <div className='text'>
                {review.text}
            </div>

            <div className='quotes'>
                <ImQuotesRight />
            </div>

            

        </div>
    )
}

export default Card