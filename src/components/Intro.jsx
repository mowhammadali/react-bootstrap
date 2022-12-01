import React from 'react';

// styles
import styled , {css} from 'styled-components/macro';
import { IconKeeper } from '../styles/styled-components/components';

const Intro = (props) => {
    const {id , title , text} = props;
    return (
        <div className='col-12 col-md-6'>
            <div className="card text-center rounded-5" 
            css={`@media(min-width: 768px){
                margin-top:${id == 2 && "40px"}; margin-top: ${id == 4 && "40px"};
            }
             background-color: ${({theme}) => theme.primaryBg};`}>
                <div className="card-body">
                        <IconKeeper>
                            {<props.icon className="my-icon"/>}
                        </IconKeeper>
                        <p className="card-text h6 fs-5 my-4" css={`color: ${({theme}) => theme.textColor};`}>{title}</p>
                        <p className='fs-6 text-muted'>{text}</p>
                    </div>
            </div>
        </div>
    );
};

export default Intro;