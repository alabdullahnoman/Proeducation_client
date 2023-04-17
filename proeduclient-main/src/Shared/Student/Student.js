import React from 'react';
import stu1 from '../../Image/student/student-1.png'
import stu2 from '../../Image/student/student-2.png'
import stu3 from '../../Image/student/student-3.png'
import stu4 from '../../Image/student/student-4.png'

const Student = () => {
    return (
        <div>
            <div className="container my-5" id="success">
        <h1>
          Meet Our Successfull <br/> Students
        </h1>
        <p className="text-secondary mt-3">It is a long established fact that a reader will be distracted by the <br/>
          readable content of a page when looking at its layout.</p>

        <div className="row my-5">
          <div className="col-xl-3 col-md-6 col-sm-12 col-12">
            <div className="d-flex flex-column border border-1 rounded">
              <img src={stu1} alt=""/>
              <div className="ps-2 pt-3">
                <h3>Awlad Hossain</h3>
              <p className="text-secondary fs-5">UIUX Designer</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-12">
            <div className="d-flex flex-column border border-1 rounded">
              <img src={stu2} alt=""/>
              <div className="ps-2 pt-3">
                <h3>Jannatul Islam</h3>
              <p className="text-secondary fs-5">Motion Design</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-12">
            <div className="d-flex flex-column border border-1 rounded">
              <img src={stu4} alt=""/>
              <div className="ps-2 pt-3">
                <h3>Imran Hossain</h3>
              <p className="text-secondary fs-5">Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 col-12">
            <div className="d-flex flex-column border border-1 rounded">
              <img src={stu3} alt=""/>
              <div className="ps-2 pt-3">
                <h3>Nishi</h3>
              <p className="text-secondary fs-5">Web Developer</p>
              </div>
            </div>
            
          </div>
          
                    
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-info text-white fs-5 py-2 px-4">View All</button>
        </div>
       </div>
        </div>
    );
};

export default Student;