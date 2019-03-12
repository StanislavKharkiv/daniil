import React from "react";
import Slider from "react-slick";
import slider1 from './img/slider1.jpg';
import slider2 from './img/slider2.jpg';
import slider3 from './img/slider3.jpg';
import slider4 from './img/slider4.jpg';
import slider5 from './img/slider5.jpg';
import slider6 from './img/slider6.jpg';
import './sliderCss.css';

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            draggable: false
        };
        return (
            <Slider {...settings}>
                <div className='clider-wrapper'>
                    <img src={slider1} alt="historical pfotos of kings"/>
                </div>
                <div className='clider-wrapper'>
                    <img src={slider2} alt="historical pfotos of kings"/>
                </div>
                <div className='clider-wrapper'>
                    <img src={slider3} alt="historical pfotos of kings"/>
                </div>
                <div className='clider-wrapper'>
                    <img src={slider4} alt="historical pfotos of kings"/>
                </div>
                <div className='clider-wrapper'>
                    <img src={slider5} alt="historical pfotos of kings"/>
                </div>
                <div className='clider-wrapper'>
                    <img src={slider6} alt="historical pfotos of kings"/>
                </div>
            </Slider>
        );
    }
}
export default SimpleSlider;