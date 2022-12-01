import React, { useContext, useState } from 'react';

// bootstrap components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// styles and icons
import { BsFillSunFill } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { MdMenu } from "react-icons/md"
import styled , {css} from 'styled-components/macro';
import { BasicTheme , DarkTheme } from '../styles/Theme/Theme';

// context
import { ToggleContext } from '../App';

// components
import BSDropdown from './BootstrapComponents/BSDropdown';

const NavBar = () => {
    const {isDark , themeHandler} = useContext(ToggleContext);
    const [sideBar , setSideBar] = useState(false);
    return (
        <NavMenu className='row w-100 py-4 px-6 d-flex align-items-center justify-content-between shadow m-0'>
            <section className='col-4 col-sm-2 col-md-2 swich'>
                <div className="form-check form-switch">
                    <input className="form-check-input" style={{boxShadow: "none" }} onClick={themeHandler} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        {isDark ? <BsFillSunFill style={{color: "#F49D1A" , fontSize: "25px"}}/> : <BsFillMoonFill style={{color: DarkTheme.primaryBg , fontSize: "25px"}}/>}
                    </label>
                </div>
            </section>
            <section className='col-4 col-sm-10 col-md-10 d-flex align-items-center justify-content-end m-0'>
                <Ul show={sideBar} className='menu m-0 gap-4 gap-md-5 h6 flex-column flex-sm-row p-2 py-sm-0'>
                    <AiOutlineClose onClick={() => setSideBar(false)} className='d-inline-block d-sm-none ms-auto'
                     css={`cursor: pointer;
                    font-size: 22px;
                    `}/>
                    <li><a href='#'>صفحه اصلی</a></li>
                    <BSDropdown isDark={isDark}/>
                    <li><a href='#'>درباره ما</a></li>
                    <li><a href='#'>تماس با ما</a></li>
                </Ul>
            </section>
            <section className='col-4 d-flex justify-content-end'>
                <MdMenu onClick={() => setSideBar(!sideBar)} className='d-sm-none'
                css={`
                cursor: pointer;
                font-size: 26px;
                color: ${props => props.theme.textColor};
                `}/>
            </section>
        </NavMenu>
    );
};

const NavMenu = styled.div`
    a{
        text-decoration: none;
        color: ${props => props.theme.textColor}
    }
`

const Ul = styled.ul`
        display: flex;
        align-items: center;
        background-color: transparent;
        @media(min-width: 576px) and (max-width: 768px){
            font-size: 14px;
        }
        @media(max-width: 575px){
            position: absolute;
            width: 300px;
            height: 100vh;
            background-color: ${props => props.theme.sectionBg};
            top: 0;
            right: 0;
            transition: all .8s ease-in-out;
            transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
        }
`

export default NavBar;