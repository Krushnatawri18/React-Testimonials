import React, { useState } from 'react'
import Card from './Card';
import './Testimonial.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial(props) {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(randomNumber);
    }

    return (
        <div className='testimonials'>
            <Card review={reviews[index]} />
            <div className='shifters'>
                <button onClick={leftShiftHandler}><FiChevronLeft /></button>
                <button onClick={rightShiftHandler}><FiChevronRight /></button>
            </div>

            <div className='surprise'>
                <button onClick={surpriseHandler}>Surprise me</button>
            </div>
        </div>
    )
}

export default Testimonial