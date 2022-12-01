import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

// image
import monkey from "../assets/image/monkey.png";
import monkey2 from "../assets/image/monkey2.png";

// styles
import styled , {css} from 'styled-components/macro';

// context
import { ToggleContext } from '../App';

const Form = () => {
    const {isDark} = useContext(ToggleContext);
    return (
        <Container className='py-2 mb-7'>
            <div className='row px-md-3 px-lg-4'>
                <div className='row gy-4'>
                    <div className='col-12 text-center'>
                        <p className='h3' css={`color: ${props => props.theme.textColor};`}>لورم ایپسوم متن ساختگی</p>
                    </div>
                    <div className='col-12 text-center'>
                        <p className='h6 text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                    <div className='col-12'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-12 col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label h5 text-muted">ایمیل</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                                    css={`box-shadow: none !important;
                                    background-color: ${props => props.theme.sectionBg};
                                    border-color: ${props => props.theme.sectionBg};
                                    &::placeholder{
                                        color: ${props => props.theme.textColor};
                                    }
                                    &:focus{
                                        background-color: ${props => props.theme.sectionBg};
                                        border-color: ${props => props.theme.sectionBg};
                                        color: ${props => props.theme.textColor};
                                    }
                                    `} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label h5 text-muted">متن پیام</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                                    css={`box-shadow: none !important;
                                    resize: none;
                                    height: 150px;
                                    background-color: ${props => props.theme.sectionBg};
                                    border-color: ${props => props.theme.sectionBg};
                                    &::placeholder{
                                        color: ${props => props.theme.textColor};
                                    }
                                    &:focus{
                                        background-color: ${props => props.theme.sectionBg};
                                        border-color: ${props => props.theme.sectionBg};
                                        color: ${props => props.theme.textColor};
                                    }
                                    `}></textarea>
                                </div>
                            </div>
                            <div className='col-10 col-md-5 offset-md-1'>
                                <img src={`${isDark ? monkey2 : monkey}`} alt='coin' className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Form;