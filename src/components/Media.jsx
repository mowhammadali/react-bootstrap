import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

// images
import media1 from "../assets/social-media/img_6.svg";
import media2 from "../assets/social-media/img_7.svg";
import media3 from "../assets/social-media/img_8.svg";
import media4 from "../assets/social-media/img_9.svg";
import media5 from "../assets/social-media/img_10.svg";
import media6 from "../assets/social-media/img_11.svg";

const Media = () => {

    const [images] = useState([
        {id: 1 , media: media1},
        {id: 2 , media: media2},
        {id: 3 , media: media3},
        {id: 4 , media: media4},
        {id: 5 , media: media5},
        {id: 6 , media: media6},
    ])

    return (
        <Container className='py-2 mb-7'>
            <div className='row px-md-3 px-lg-4 justify-content-lg-between justify-content-md-around justify-content-center gy-5'>
                {images.map(image => {
                    return(
                        <React.Fragment key={image.id}>
                            <div className='col-3 col-md-2 col-lg-1'>
                                <img className='img-fluid' src={image.media} alt="media" style={{cursor: "pointer"}}/>
                            </div>
                            {
                                image.id % 2 == 0 &&
                                <div className='w-100 d-none d-md-block d-lg-none'></div>
                            }
                            <div className='w-100 d-block d-md-none'></div>
                        </React.Fragment>
                    )
                })}
            </div>
        </Container>
    );
};

export default Media;