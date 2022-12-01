import React , {useState} from 'react';
import { Container } from 'react-bootstrap';

// components
import BSCarousel from './BootstrapComponents/BSCarousel';

// styles
import styled , {css} from 'styled-components/macro';
import { SecondBtn } from '../styles/styled-components/components';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='py-4 mb-5' css={`background-color: ${props => props.theme.sectionBg};`}>
            <Container className='my-5' >
                <div className='row px-md-3 px-lg-4 gy-4 gx-2 align-items-center'>
                    <div className='col-12 text-center'>
                        <p className='h3' css={`color: ${props => props.theme.textColor};`}>لورم ایپسوم متن ساختگی</p>
                    </div>
                    <div className='col-12 text-center'>
                        <p className='h6 text-dark'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className='col-12'>
                        <BSCarousel index={index} handler={handleSelect}/>
                    </div>
                    <div className='col-12'>
                        <SecondBtn>لورم ایپسوم</SecondBtn>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Slider;