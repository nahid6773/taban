import React, { Fragment } from 'react'
import Content from '../content/content';
import Footer from '../footer/footer';
import Nav from '../Nav/nav';
import Search from '../search/search';
import Slider from '../slider/slider';
import { useLocation } from 'react-router';
import Login from '../Login/LOgin';

const Mainlayout = (props) => {

    const Location = useLocation();
    const { pathname } = Location;

    return (
        <Fragment>
            <Nav />
            {pathname === "/" ? <Slider /> : null}
            {pathname === "/" ? <Search /> : null}
            {pathname === "/" ? <Content /> : null}
            <div>{props.children}</div>
            <Footer />
        </Fragment>
    );
}

export default Mainlayout;