import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

// styles and icons
import styled , {css} from 'styled-components/macro';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
// 6037697450275570
// 9124283891
const Footer = () => {
    const [lists] = useState([[
        {id: 1 , link: "صفحه اصلی"},
        {id: 2 , link: "محصولات"},
        {id: 3 , link: "گالری"},
        {id: 4 , link: "پشتیبانی"}] , 
        [{id: 1 , link: "درباره ما"},
        {id: 2 , link: "تماس با ما"}
    ]])
    const style = `font-size: 30px; cursor: pointer;`
    return (
        <Container className='py-3'>
            <div className='row px-md-3 px-lg-4 gy-5 gy-md-0 align-items-center'>
                <section className='col-12 col-md-4'>
                    <p className='h6 mb-4 text-center text-md-start'
                    css={`color: ${props => props.theme.textColor};`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                    <div className='d-flex justify-content-md-start justify-content-center gap-3'>
                        <BsFacebook css={`font-size: 30px; cursor: pointer;
                        color: ${({theme}) => theme.textColor};`}/>
                        <BsTelegram css={`font-size: 30px; cursor: pointer;
                        color: ${({theme}) => theme.textColor};`}/>
                        <BsInstagram css={`font-size: 30px; cursor: pointer;
                        color: ${({theme}) => theme.textColor};`}/>
                        <AiFillLinkedin css={`font-size: 30px; cursor: pointer;
                        color: ${({theme}) => theme.textColor};`}/>
                    </div>
                </section>
                <section className='col-12 col-md-8'>
                    <div className='row justify-content-between gy-3 gy-md-0'>
                        <div className='col-12 col-md-3'>
                            <h6 className="fw-bold footer-heading pb-1" 
                            css={`color: ${props => props.theme.textColor}; border-bottom: 3px solid ${props => props.theme.textColor};`}>
                            بخش های وبسایت</h6>
                            <ul className='list-unstyled'>
                                {lists[0].map(list => <li key={list.id} className="mb-2"><a className='text-muted' href='#'>{list.link}</a></li>)}
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h6 className="fw-bold footer-heading pb-1" 
                            css={`color: ${props => props.theme.textColor}; border-bottom: 3px solid ${props => props.theme.textColor};`}>
                            محصولات</h6>
                            <ul className='list-unstyled'>
                                {lists[0].map(list =><li key={list.id} className="mb-2"><a className='text-muted' href='#'>لورم ایپسوم</a></li>)}
                            </ul>
                        </div>
                        <div className='col-12 col-md-3'>
                            <h6 className="fw-bold footer-heading pb-1" 
                            css={`color: ${props => props.theme.textColor}; border-bottom: 3px solid ${props => props.theme.textColor};`}>
                            درباره ما</h6>
                            <ul className='list-unstyled'>
                                <li className="mb-2"><a className='text-muted' href='#'>درباره ما</a></li>
                                <li className="mb-2"><a className='text-muted' href='#'>تماس با ما</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
};

export default Footer;