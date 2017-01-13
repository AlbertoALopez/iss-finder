import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Slider from 'react-slick';
import './_AstroInfo.scss';


export default class AstroInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Segment>
        <div id="slider">
          <p>Did you know?</p>
          <Slider {...settings}>
            <span className="fact"><p>The ISS travels at 27,600 kilometres per hour</p></span>
            <span className="fact"><p>The ISS has an orbit height of 400 kilometres</p></span>
            <span className="fact"><p>The ISS makes a full rotation of the earth every one and half hours</p></span>
            <span className="fact"><p>The ISS was launched on November 20, 1988</p></span>
            <span className="fact"><p>The ISS has an orbit height of 400 kilometres</p></span>
          </Slider>
        </div>
      </Segment>
    );
  }
}
