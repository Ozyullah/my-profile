import React from 'react';
import Slider from '../../../src/SharedPages/SliderProfile/Slider';
import MySkills from '../../../src/SharedPages/Skills/MySkills';
import Services from '../../SharedPages/Services/Services';
import AboutMe from '../../SharedPages/SelfAbout/AboutMe';
import Projects from '../../SharedPages/ShowProjects/Projects';
import Comments from '../../SharedPages/Comments/Comments';
import { Fade, LightSpeed, Roll, Bounce, Flash, Pulse, RubberBand, Pop, Slide, Spin, Swing } from 'react-swift-reveal';
import Contact from '../ContactPage/Contact';
import ProjectVideoGallery from '../../SharedPages/ShowProjects/Projects';
import VideoGallery from '../../SharedPages/ShowProjects/Projects';
import AdvancedVideoGallery from '../../SharedPages/ShowProjects/Projects';
const Home = () => {
    return (
        <div>

            <Fade>
                <Slider></Slider>
                {/* <Services></Services>  */}
                <AboutMe></AboutMe>
            </Fade>
            <Slide>
                {/* <MySkills></MySkills> */}
                {/* <Projects></Projects>
                 */}
                <AdvancedVideoGallery></AdvancedVideoGallery>
            </Slide>
            <Pop>
                <Contact></Contact>
            </Pop>
        </div>
    );
};

export default Home;