import React from 'react';
import styled , {css} from "styled-components/macro"
import { FirstBtn } from '../styles/styled-components/components';

const Card = (props) => {
    const {id , img , title , text} = props;
    return (
        <div className='col-10 col-sm-8 col-md-4'>
            <div className='card rounded-4' css={`background-color: ${props => props.theme.sectionBg};`}>
                <img src={img} className="card-img-top" alt="..." style={{height: "220px"}}/>
                <div className='card-body'>
                    <h5 className="card-title" css={`color: ${props => props.theme.textColor};`}>{title}</h5>
                    <p className="card-text fs-7 text-dark">{text}</p>
                    {<props.btn>لورم ایپسوم</props.btn>}
                </div>
            </div>
        </div>
    );
};

export default Card;