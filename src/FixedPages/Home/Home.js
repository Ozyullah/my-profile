import React from 'react';
import Slider from '../../../src/SharedPages/SliderProfile/Slider';
import MySkills from '../../../src/SharedPages/Skills/MySkills';
import Services from '../../SharedPages/Services/Services';
import AboutMe from '../../SharedPages/SelfAbout/AboutMe';
import Projects from '../../SharedPages/ShowProjects/Projects';
import Comments from '../../SharedPages/Comments/Comments';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Services></Services>
            <Projects></Projects>
            <Comments></Comments>
        </div>
    );
};

export default Home;