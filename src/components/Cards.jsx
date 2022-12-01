import React, { Component, useContext } from 'react';
import { Container } from 'react-bootstrap';

// styles and icons
import styled , {css} from 'styled-components/macro';
import { Btn , SecondBtn , FirstBtn} from '../styles/styled-components/components';

// components
import Card from './Card';

// context
import { CardContext } from '../App';

const Cards = () => {
    const data = useContext(CardContext);
    return (
        <Container className='py-4 mb-7'>
            <div className='row px-md-3 px-lg-4 gy-4'>
                <section className='col-12 text-center'>
                    <p className='h3' css={`color: ${props => props.theme.textColor};`}>لورم ایپسوم متن ساختگی</p>
                </section>
                <section className='col-12 text-center'>
                    <p className='h6 text-muted'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </section>
                <section className='col-12'>
                    <div className='row justify-content-center gy-4 gy-md-0'>
                        {
                            data.map(col => <Card key={col.id} {...col}/>)
                        }
                    </div>
                </section>
            </div>
        </Container>
    );
};

export default Cards;