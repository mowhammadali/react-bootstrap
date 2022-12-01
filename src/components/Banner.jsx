import React , {useContext} from 'react';
import { Container , Button} from 'react-bootstrap';

// context
import { ToggleContext } from '../App';

// styles
import styled , {css} from 'styled-components/macro';
import { Btn , SecondBtn } from '../styles/styled-components/components';

// img
import bannerImg from "../assets/image/Banner.png";
import bannerImg2 from "../assets/image/Banner2.png";

const Banner = () => {
    const {isDark , setIsDark} = useContext(ToggleContext);
    return (
        <Container className="mb-6">
            <BannerSection className='row px-1 px-md-3 px-lg-4 py-5 align-items-center'>
                <section className='col-lg-7 col-md-6 col-sm-12'>
                    <p className='h2 mb-4'
                    css={`
                    color: ${props => props.theme.textColor};
                    `}
                    >
                    لورم ایپسوم متن ساختگی</p>
                    <p className='lh-lg text-muted fs-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    <div className='d-flex gap-3'>
                        <Btn className='px-3 py-2 rounded'>لورم ایپسوم</Btn>
                        <SecondBtn className='px-3 py-2 rounded'>لورم ایپسوم</SecondBtn>
                    </div>
                </section>
                <section className='col-lg-5 col-md-6 col-sm-12'>
                    <img className='img-fluid' src={`${isDark ? bannerImg2 : bannerImg}`}/>
                </section>
            </BannerSection>
        </Container>
    );
};

const BannerSection = styled.div``

export default Banner;