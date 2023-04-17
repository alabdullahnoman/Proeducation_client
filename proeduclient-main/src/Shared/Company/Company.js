import React from 'react';
import img1 from '../../Image/company/company-1.png'
import img2 from '../../Image/company/company-2.png'
import img3 from '../../Image/company/company-3.png'
import img4 from '../../Image/company/company-4.png'
import img5 from '../../Image/company/company-5.png'
import img6 from '../../Image/company/company-6.png'

const Company = () => {
    return (
        <div>
            <div className="container my-5 d-xl-inline d-sm-none d-md-none d-none">
 
                <h1 className="text-center">
                Trusted by over 800+ companies
                </h1>
                <div className="d-flex align-items-center justify-content-evenly mt-5">
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
                </div>
                </div>
        </div>
    );
};

export default Company;