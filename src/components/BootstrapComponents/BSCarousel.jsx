import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

// image
import img1 from "../../assets/image/4.jpg";
import img2 from "../../assets/image/5.jpg";
import img3 from "../../assets/image/6.jpg";

const BSCarousel = ({index , handler}) => {
    const text1 = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.";
    const [carousel , setCarousel] = useState([
      {id: 1 , src: img1 , alt: "first" , title: "اسلاید اول" , text: text1},
      {id: 2 , src: img2 , alt: "second" , title: "اسلاید دوم" , text: text1},
      {id: 3 , src: img3 , alt: "third" , title: "اسلاید سوم" , text: text1},
    ])
    return (
        <Carousel activeIndex={index} onSelect={handler}>
          {
            carousel.map(item => {
              return(
                <Carousel.Item key={item.id}>
                  <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.alt}
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
    );
};

export default BSCarousel;