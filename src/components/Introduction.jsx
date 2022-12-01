import React , {useContext} from 'react';
import { Container } from 'react-bootstrap';

// styles and icons
import {BsFillPieChartFill} from "react-icons/bs";
import {css} from 'styled-components/macro';
import { SecondBtn  , IconKeeper} from '../styles/styled-components/components';

// components
import Intro from './Intro';

// context
import { IntroContext } from '../App';

const Introduction = () => {
    const data = useContext(IntroContext);
    return (
        <div className='py-4 mb-5' css={`background-color: ${props => props.theme.sectionBg};`}>
            <Container className='my-5' >
                <div className='row px-md-3 px-lg-4 gx-2 align-items-center'>
                    <section className='col-12 col-md-4 mb-5 mb-md-0 d-inline-flex flex-column align-items-start gap-3'>
                        <IconKeeper>
                            <BsFillPieChartFill css={`color: ${props => props.theme.primaryColor};
                            font-size: 35px;
                            `}/>
                        </IconKeeper>
                        <p className='h5' css={`color: ${props => props.theme.textColor};`}>لورم ایپسوم متن ساختگی</p>
                        <p className='text-dark fs-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        <SecondBtn>لورم ایپسوم</SecondBtn>
                    </section>
                    <section className='col-12 col-md-8 ps-md-5'>
                        <div className='row row-cols-2 g-4 justify-content-between'>
                            {
                                data.map(item => <Intro key={item.id} {...item}/> )
                            }
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default Introduction;