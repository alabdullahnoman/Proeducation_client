import React from 'react';
import img1 from '../../Image/working.png'
import './Explore.css'

const Explore = () => {
    return (
        <div className='mt-5 px-2'>
             <div className="row align-items-center "id="bg" >
          <div className="col-xl-5 col-md-6 col-sm-12 p-0" id="img" >
            <img src={img1} className="img-fluid" alt=""/>
          </div>
          <div className="col-xl-7 col-md-6 col-sm-12" >
            <h1 className="fs-1">Explore The elearning <br/>
              Institute</h1>
              <p className="mb-4 text-secondary">There are many variations of passages of Lorem Ipsum available, but the <br/>
                majority have suffered alteration in some form, by injected humour, or <br/>
                randomised words which don't look even slightly believable. If you are going <br/>
                to use a passage of Lorem Ipsum, you need to be sure.</p>
                <p className="text-secondary">Anything embarrassing hidden in the middle of text. All the Lorem Ipsum <br/>
                generators on the Internet tend to repeat predefined.</p>
                <div className="d-flex gap-5 mt-4">
                  <div>
                    <h1>3.2K+</h1>
                    <p className=" text-secondary ">Online Course</p>
                  </div>
                  <div>
                    <h1>600+</h1>
                    <p className=" text-secondary ">Expert members</p>
                  </div>
                  <div>
                    <h1>1K+</h1>
                    <p className=" text-secondary ">Review and Rating</p>
                  </div>
                </div>
                <button type="button" className="btn btn-info text-white px-4 py-3 fs-5">Read More</button>
          </div>
        </div>
        </div>
    );
};

export default Explore;