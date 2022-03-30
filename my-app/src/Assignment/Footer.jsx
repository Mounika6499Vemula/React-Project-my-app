import React from "react";
import './Style.css';
import mobile from '../assesets/images/f-mobile.png';
import location from '../assesets/images/f-location.png';
import facebook from '../assesets/images/f-facebook.png';
import play from '../assesets/images/f-play.png';
import linkedin from '../assesets/images/f-linkedin.png';
import twitter from '../assesets/images/f-twitter.png';
import footerOne from '../assesets/images/footer-1.png';
import footerTwo from '../assesets/images/footer-2.png';
import footerThree from '../assesets/images/footer-3.png';
import footerFour from '../assesets/images/footer-4.png';


class Footer extends React.Component
{
    constructor(props){
        super(props);
        
        
    }
    
    render()
    {
        return(
            <React.Fragment>
                      <div className="container-fluid bg-dark text-white">
                            <div className="row footer">
                                <div className="col-sm-3">
                                    
                                    <p><img src={mobile} width={10} height={10}/>1800 420 0707</p>
                                    <p>@ customercare@company.com</p>
                                    <p><img src="../images/f-location.png" width={10} height={10}/>Address line 1Address line 2</p>
                                </div>  
                                <div className="col-sm-2">
                                        <h3>COMPANY</h3>
                                        <p><a href="#">About Us</a></p>
                                        <p><a href="#">Sell With Us</a></p>
                                        <p><a href="#">Our Sellers</a></p>
                                </div>
                                <div className="col-sm-3">
                                        <h3>INFORMATION</h3>
                                        <p><a href="#">Privacy Policy</a></p>
                                        <p><a href="#">Exchange and Returns Policy</a></p>
                                        <p><a href="#">Terms and conditions</a></p>
                                        <p><a href="#">Common questions</a></p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row news">
                                        <h6>SUBSCRIBE NEWSLETTER</h6><br/>
                                        <input type="text" placeholder="ENter your email address"/>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                    <div className="row social mt-2">
                                        <img src={facebook} className="img-fluid"/>
                                        <img src={play} className="img-fluid box"/>
                                        <img src={linkedin} className="img-fluid"/>
                                        <img src={twitter} className="img-fluid box"/>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row payment">
                                <h3>PAYMENT METHODS</h3><br/>
                                <img src={footerOne} className="img-fluid box"/>
                                <img src={footerTwo} className="img-fluid"/>
                                <img src={footerThree} className="img-fluid box"/>
                                <img src={footerFour} className="img-fluid box"/>
                                <span className="box-text">VISA</span>
                            </div>
                            <div className="row copy">
                                <div className="col-sm-12">
                                    <p className="text-white text-center">Copyrights &copy; 2021 Company Ltd.All rights reserved.</p>
                                </div>
                            </div>

                        </div>
            </React.Fragment>
        )
    }
}
export default Footer;