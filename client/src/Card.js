import React from 'react'
import './Card.css';
function Card({ name, subject }) {
    return (
        <div>
            <div class="card text-white bg-primary mb-3 mt-2">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text">Subject : {subject}</p>
                </div>
            </div>
        </div>
    )
}

export default Card

