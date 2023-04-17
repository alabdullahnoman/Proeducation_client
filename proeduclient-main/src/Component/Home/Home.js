import React from 'react';
import Carousal from '../../Shared/Carousal/Carousal';
import Explore from '../../Shared/Explore/Explore';
import Newslater from '../../Shared/Newslater/Newslater';
import Student from '../../Shared/Student/Student';
import Company from '../../Shared/Company/Company';

const Home = () => {
    return (
        <div className='container'>
            <Carousal></Carousal>
            <Explore></Explore>
            <Newslater></Newslater>
            <Student></Student>
            <Company></Company>
        </div>
    );
};

export default Home;