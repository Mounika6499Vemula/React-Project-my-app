import React from "react";
import './Style.css';
import productOne from '../assesets/images/product-1.png';
import fb from '../assesets/images/fb.png';
import twitter from '../assesets/images/twitter.png';
import insta from '../assesets/images/insta.png';
import youtube from '../assesets/images/youtube.png';
import blueCart from '../assesets/images/blue-cart.png';
import cube from '../assesets/images/cube.png';
import truck from '../assesets/images/truck.png';
import freeTruck from '../assesets/images/free-truck.png';

class Body extends React.Component
{
    constructor(props){
        super(props);
        this.state=
            {
                qty:1
            }
        
        this.incQty=this.incQty.bind(this);
        this.decQty=this.decQty.bind(this);
        
    }
    incQty()
    {
        this.setState(
            {
                qty:this.state.qty+1
            }
        )
    }
    decQty()
    {
        this.setState(
            {
                qty:(this.state.qty-1>0)?this.state.qty-1:1
            }
        )
    }
    
    render()
    {
        return(
            <React.Fragment>
                      <div className="container">
                            <div className="row">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Category</a></li>
                                    <li className="breadcrumb-item"><a href="#">Sub Category</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Break Pads</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="row product">
                                <div className="col-sm-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-img">
                                                <div className="row big-product">
                                                    <img src={productOne} className="img-fluid"/>
                                                </div>
                                                <div className="row small-product">
                                                    <img src={productOne} className="img-fluid" width={50} height={50}/>
                                                    <img src={productOne} className="img-fluid" width={50} height={50}/>
                                                    <img src={productOne} className="img-fluid" width={50} height={50}/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5 product-information">
                                    <h1>Product Name</h1>
                                    <div className="row reviews">
                                        <div className="col-sm-4">
                                            <i className="fa fa-star full"></i>
                                            <i className="fa fa-star full"></i>
                                            <i className="fa fa-star full"></i>
                                            <i className="fa fa-star-half-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="col-sm-8">
                                            <span className="text-primary">1085 Reviews | 856 answered questions</span>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nemo.</p>
                                        <a href="#">more details</a>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-3">
                                            <h4>$87.00</h4>
                                        </div>
                                        <div className="col-sm-4">
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className="col-sm-5">
                                            <span>
                                                <i className="fa fa-arrow-up" aria-hidden="true"></i>
                                                <i className="fa fa-arrow-down" aria-hidden="true"></i>
                                                <a href="#">Add to Compare</a>
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group">
                                            <label>Select Size</label><br/>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <select>
                                                        <option>1 in.</option>
                                                        <option>2 in.</option>
                                                        <option>3 in.</option>
                                                        <option>4 in.</option>
                                                        <option>5 in.</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-4">
                                                    <select>
                                                        <option>1 in.</option>
                                                        <option>2 in.</option>
                                                        <option>3 in.</option>
                                                        <option>4 in.</option>
                                                        <option>5 in.</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-4">
                                                    <select>
                                                        <option>1 in.</option>
                                                        <option>2 in.</option>
                                                        <option>3 in.</option>
                                                        <option>4 in.</option>
                                                        <option>5 in.</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group">
                                            <label>Qty</label>
                                            <span className="box">
                                                <i className="fa fa-minus" onClick={this.decQty}></i>
                                                <span>{this.state.qty}</span>
                                                <i className="fa fa-plus" onClick={this.incQty}></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group zipcode">
                                            <label>Zipcode:</label>
                                            <input type="text" placeholder="Enter zipcode"/>
                                            <span><a href="#">Check Availability</a></span>
                                            
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group">
                                            <input type="button" className="btn btn-primary" value="Add to Cart"/>
                                            <input type="button" className="btn btn-primary" value="BUY Now"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-2">
                                            <span>Share</span>
                                        </div>
                                        <div className="col-sm-9">
                                            <img src={fb}/>
                                            <img src={twitter}/>
                                            <img src={insta}/>
                                            <img src={youtube}/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <span>Sold By</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="text-primary">Seller One</span>
                                        </div>
                                        
                                    </div>
                                    <div className="row mt-3 seller">
                                        <div className="col-sm-4">
                                            <span>Seller Rating</span>
                                        </div>
                                        <div className="col-sm-4">
                                            <i className="fa fa-star yellow"></i>
                                            <i className="fa fa-star yellow"></i>
                                            <i className="fa fa-star yellow"></i>
                                            <i className="fa fa-star yellow"></i>
                                            <i className="fa fa-star gray"></i>
                                        </div>
                                        <div className="col-sm-4">
                                            <span>4/5(on 852 sales)</span>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <a href="#">Seller Information</a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                <div className="row  delivery">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>More Buying Options</h3>
                                            <hr/>
                                            <div className="row">
                                                    <div className="col-sm-5">
                                                        <p><span className="text-primary">Seller Two</span><br/><span>Free Delivery</span></p>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>$93.00</h5>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="bg-primary">
                                                            <img src={blueCart} className="img-fluid"/>
                                                        </div>
                                                        
                                                    </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col-sm-5">
                                                        <p><span className="text-primary">Seller Three</span><br/><span>Delivery $3.99</span></p>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <h5>$91.00</h5>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="bg-primary">
                                                            <img src={blueCart} className="img-fluid"/>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="card-bottom row">
                                                    
                                                    <h6 className="text-primary text-center">4 offers starting at $91.00</h6>
                                                </div>
                                            </div>
                                    </div>
                                </div> 
                                <div className="row mt-2">
                                    <div className="col-sm-3">
                                            <img src={cube} className="img-fluid"/>
                                    </div>
                                    <div className="col-sm-9">
                                            <p>Free Shipping:Delivered by 14 Oct</p>  
                                    </div>
                                </div><br/>
                                <div className="row mt-2">
                                        <div className="col-sm-3">
                                            <img src={truck} className="img-fluid"/>
                                        </div>
                                        <div className="col-sm-9">
                                            <p>Express Shipping:Delivered by 11 Oct&nbsp;&nbsp;<a href="#">Select Express</a></p>  
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-3">
                                            <img src={freeTruck} className="img-fluid"/>
                                        </div>
                                        <div className="col-sm-9">
                                            <p>Buy for $800.00 from this seller to avail 10% discount</p>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        )
    }
}
export default Body;