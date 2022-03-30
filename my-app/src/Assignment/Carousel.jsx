import React from "react";
import './Style.css';
import lessThan from '../assesets/images/c-lessthan.png';
import product from '../assesets/images/product.png';
import productOne from '../assesets/images/product-1.png';
import productTwo from '../assesets/images/product-2.png';
import productThree from '../assesets/images/product-3.png';
import productFour from '../assesets/images/product-4.png';
import greaterThan from '../assesets/images/c-greaterthan.png';

class Carousel extends React.Component
{
    constructor(props){
        super(props);
        
        
    }
    
    render()
    {
        return(
            <React.Fragment>
                      <div className="container">
                            <h2>Recommended Products</h2>
                            <div className="row recommended">
                                <img src={lessThan} className="img-fluid lessthan"/>
                                
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-img">
                                                <div className="row">
                                                    
                                                    <img src={product} className="img-fluid"/>
                                                    <p>Product Name</p>
                                                    <p>WDE584269</p><br/>
                                                    <p>$54.52</p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-img">
                                                <div className="row">
                                                    <img src={productOne} className="img-fluid"/>
                                                    <p>Product Name</p>
                                                    <p>WDE584269</p><br/>
                                                    <p>$14.25</p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-img">
                                                <div className="row">
                                                    <img src={productTwo} className="img-fluid"/>
                                                    <p>Product Name</p>
                                                    <p>WDE584269</p><br/>
                                                    <p>$54.52</p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-img">
                                                <div className="row">
                                                    <img src={productThree} className="img-fluid"/>
                                                    <p>Product Name</p>
                                                    <p>WDE584269</p><br/>
                                                    <p>$54.52</p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-img">
                                                <div className="row">
                                                    <img src={productFour} className="img-fluid"/>
                                                    
                                                    <p>Product Name</p>
                                                    <p>WDE584269</p><br/>
                                                    <p>$54.52</p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                
                                <img src={greaterThan} className="img-fluid greaterthan"/>
                            </div>
                        </div>
            </React.Fragment>
        )
    }
}
export default Carousel;