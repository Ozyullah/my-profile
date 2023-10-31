import React from 'react';
import Slider from '../../../src/SharedPages/SliderProfile/Slider';
import MySkills from '../../../src/SharedPages/Skills/MySkills';
import Services from '../../SharedPages/Services/Services';
import AboutMe from '../../SharedPages/SelfAbout/AboutMe';
import Projects from '../../SharedPages/ShowProjects/Projects';
import Comments from '../../SharedPages/Comments/Comments';
import { Fade, LightSpeed, Roll, Bounce, Flash, Pulse, RubberBand, Pop, Slide, Spin, Swing } from 'react-swift-reveal';
import Contact from '../ContactPage/Contact';
const Home = () => {
    return (
        <div>

            <Fade>
                <Slider></Slider>
                <AboutMe></AboutMe>
            </Fade>
            <Slide>
                <MySkills></MySkills>
                <Services></Services>
                <Projects></Projects>
            </Slide>
            <Roll>
                <Contact></Contact>
            </Roll>
        </div>
    );
};

export default Home;