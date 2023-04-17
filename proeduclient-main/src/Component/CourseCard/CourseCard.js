import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({course}) => {
    const {id,Title,img,price,body}=course
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text m-0">{body}</p>
                        <p className="card-price text-primary m-0">Price: ${price}</p>
                        <Link to={`/course/buy/${id}`}><button className='px-4 py-2 btn btn-info border border-0 text-white'>Buy Now</button></Link>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CourseCard;