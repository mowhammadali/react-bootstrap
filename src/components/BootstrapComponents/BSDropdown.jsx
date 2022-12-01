import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const BSDropdown = ({isDark}) => {
    return (
        <NavDropdown
        id="nav-dropdown-dark-example"
        title="محصولات"
        menuVariant={isDark ? "light" : "dark"}
        >
            <NavDropdown.Item href="#action/3.1">لورم ایپسوم</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                لورم ایپسوم متن
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                لورم ایپسوم متن ساختگی
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default BSDropdown;