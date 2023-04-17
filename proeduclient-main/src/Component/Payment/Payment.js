import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './Payment.css'
import img1 from '../../Image/pay/1.png'
import img2 from '../../Image/pay/2.png'
import img3 from '../../Image/pay/3.png'
import img4 from '../../Image/pay/4.png'
import { Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const Payment = () => {
    const [radio,setradio]=useState(false)
    const [check,setcheck]=useState(false)
    const navigate =useNavigate()
    const buy =useLoaderData()
    const {Title,img,price}=buy
    const handleRadio=(e)=>{
         setradio(e.target.value);
    }
    const handlecheck=(e)=>{
        setcheck(e.target.checked);
    }
    const success =()=>{
        toast.success('Thanks for buying the course')
        navigate('/course')
    }
    return (
        <div className='container mt-5'>
            <div className='box d-flex mx-auto'> 
                <div className='boxImg p-2'>
                    <img src={img} alt="" style={{height:'100px',width:'116px'}}/>
                </div>
                <div className='boxbody d-flex align-items-center ms-2'>
                    <div>
                    <h5>{Title}</h5>
                    <p className='fs-4 text-primary'>Price ${price}</p>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='row paybox mx-auto'>
                   <div className='col-lg-4 col-sm-12 m-3'>
                        <input type="radio" name="radio" id="radio1"  value={true} onChange={handleRadio}/>
                        <label htmlFor="radio1"  style={{fontSize:'15px'}}> <img src={img1} alt="" /></label>
                   </div>
                    <div className='col-lg-4 col-sm-12 m-3'>
                        <input type="radio" name="radio" id="radio2" value={true} onChange={handleRadio}/>
                        <label htmlFor="radio2"  style={{fontSize:'15px'}}><img src={img2} alt="" /></label>
                    </div>
                    <div className='col-lg-4 col-sm-12 m-3'>
                        <input type="radio" name="radio" id="radio3" value={true} onChange={handleRadio}/>
                        <label htmlFor="radio3"  style={{fontSize:'15px'}}><img src={img3} alt="" /></label>
                    </div>
                    <div className='col-lg-4 col-sm-12 m-3'>
                        <input type="radio" name="radio" id="radio4" value={true} onChange={handleRadio}/>
                        <label htmlFor="radio4" style={{fontSize:'15px'}}><img src={img4} alt="" /></label>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <input onClick={handlecheck} type="checkbox" name="check" id="check" />
                    <label htmlFor=""><p>I agree to the <Link>Terms And Conditions, Refund Policy</Link></p></label>
                </div>
                <div className='text-center mt-3'>
                    <Button onClick={success} variant="outline-success" disabled={!(radio && check)}>Proceed to Payment</Button>
                </div>
            </div>
        </div>
    );
};

export default Payment;