
import React, { Component } from 'react';
import { AppHeader } from '@coreui/react';
import { Badge, Button, Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/s2mLogo.png'


export default class HeadBar extends Component {
    // minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }} 
    render () {
        return (
            <AppHeader fixed>
                <AppNavbarBrand
                    full={{ src: logo, width: 89, height: 30, alt: 'CoreUI Logo' }}
                /> 
                <Nav className="ml-auto" navbar>
                    <Button outline color="primary" className="btn-pill btn btn-primary btn-block">
                        Home
                    </Button>
                    <NavItem className="d-md-down-none">
                        <NavLink href="#"></NavLink>
                    </NavItem>
                    <NavItem className="d-md-down-none">
                        <NavLink href="#"></NavLink>
                    </NavItem>
                </Nav>
            </AppHeader>
        );
    }
}
