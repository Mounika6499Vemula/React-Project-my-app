import React from "react";
import './Style.css';
import logo from '../assesets/images/logo.png';
import user from '../assesets/images/user.png';
import boxCart from '../assesets/images/box-cart.png';

class Header extends React.Component
{
    constructor(props){
        super(props);
        
        
    }
    
    render()
    {
        return(
            <React.Fragment>
                    <div className="container-fluid">
                        <div className="row nav">
                            <div className="col-sm-2">
                                <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
                            </div>
                            <div className="col-sm-5">
                                <ul className="navbar">
                                    <li><a href="#">Category 1</a></li>
                                    <li><a href="#">Category 2</a></li>
                                    <li><a href="#">Category 3</a></li>
                                    <li><a href="#">Category 4</a></li>
                                    <li><a href="#">Category 5</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-5">
                                <div className="row d-flex cart">
                                    <p>Ship to:&nbsp;&nbsp;<span className="text-primary">798 Davis Lane&nbsp;<i className="fa fa-down"></i></span></p>
                                    <p><img src={user}/>&nbsp;My Account</p>&nbsp;&nbsp;
                                    <p><img src={boxCart}/>&nbsp;Cart</p>
                                </div>
                                <div className="row search">
                                    <div className="input-group mb-3">
                                        <input type="search" placeholder="Search"/>
                                        <div className="input-group-append">
                                        <span className="btn btn-primary" id="basic-addon2"><i className="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default Header;