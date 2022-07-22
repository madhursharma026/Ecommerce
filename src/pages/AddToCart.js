import { Link } from "react-router-dom";
import { useEffect } from "react";

function AddToCart() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="container-xl pt-5">
            <div className="row pb-5">
                <div className="col-lg-6 user_details order-2 order-lg-1">
                    <h2 className="sub_heading">
                        <span style={{ color: "white", background: "blue", borderRadius: "100%" }} className="px-2 py-2 py-lg-1">&nbsp;1 </span>
                        &emsp;<b>Checkout as a Guest</b>
                    </h2>
                    <h5 className="sub_para">&emsp;&emsp;&emsp;Already have an account? <Link to="/">Login <i class="fa fa-angle-right"></i></Link></h5>
                    <br />
                    <div className="add_to_cart_email">
                        <input type="email" class="form-control p-2 w-100" placeholder="Email Address" />
                    </div>
                    <input type="checkbox" className="mt-3 sub_para" style={{ marginLeft: "80px" }} /> Keep me up to date on news or offers
                    <br />
                    <div style={{ marginLeft: "80px" }}>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6 pt-3">
                                <button type="button" class="btn btn-primary w-100">Primary</button>
                                <h6 className="pt-3">By placing an order, you agree to our <Link to="/">Terms & Conditions</Link></h6>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 className="py-2 sub_heading">
                        <span style={{ color: "white", background: "blue", borderRadius: "100%" }} className='py-1'>&nbsp;&nbsp;2&nbsp;&nbsp;</span>
                        &emsp;Shipping Address
                    </h3>
                    <hr />
                    <h3 className="py-2 sub_heading">
                        <span style={{ color: "white", background: "blue", borderRadius: "100%" }} className='py-1'>&nbsp;&nbsp;3&nbsp;&nbsp;</span>
                        &emsp;Delivery Method
                    </h3>
                    <hr />
                    <h3 className="py-2 sub_heading">
                        <span style={{ color: "white", background: "blue", borderRadius: "100%" }} className='py-1'>&nbsp;&nbsp;4&nbsp;&nbsp;</span>
                        &emsp;Payment
                    </h3>
                </div>
                <div className="col-lg-6 item_details px-4 order-1 order-lg-2">
                    <div className="container container-lg-fluid">
                        <h3 className="main_heading"><b>Cart(2)</b></h3>
                        <div className="row product_details pt-3">
                            <div className="col-3 col-xl-2" style={{textAlign:"right"}}>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_2_480x.jpg?v=1653632514" alt="#ImgNotFound" width="80px" height="80px" />
                            </div>
                            <div className="col-9 col-xl-10" style={{textAlign:"left"}}>
                                <h6>Your Product Name</h6>
                                <h6>QTY: 8</h6>
                                <h6><del>$300.00</del> $150.00</h6>
                            </div>
                        </div>
                        <div className="row product_details pt-3">
                            <div className="col-3 col-xl-2" style={{textAlign:"right"}}>
                                <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_2_480x.jpg?v=1653632514" alt="#ImgNotFound" width="80px" height="80px" />
                            </div>
                            <div className="col-9 col-xl-10" style={{textAlign:"left"}}>
                                <h6>Your Product Name</h6>
                                <h6>QTY: 8</h6>
                                <h6><del>$300.00</del> $150.00</h6>
                            </div>
                        </div>
                        <div className="row py-5 sub_heading">
                            <div className="col-6">
                                <h6>Subtotal</h6>
                            </div>
                            <div className="col-6" style={{ float: "right" }}>
                                <h6>$300.00</h6>
                            </div>
                            <div className="col-6">
                                <h6>Shipping</h6>
                            </div>
                            <div className="col-6" style={{ float: "right" }}>
                                <h6>FREE</h6>
                            </div>
                            <div className="col-6">
                                <h6>Sales tax</h6>
                            </div>
                            <div className="col-6" style={{ float: "right" }}>
                                <h6>-</h6>
                            </div>
                            <div className="col-6 pt-4">
                                <h6>Promo Code</h6>
                            </div>
                            <div className="col-6 pt-2" style={{ float: "right" }}>
                                <h6><button type="button" class="btn btn-primary">Apply Promo</button></h6>
                            </div>
                            <div className="col-6 pt-3">
                                <h4>Total</h4>
                            </div>
                            <div className="col-6 pt-3" style={{ float: "right" }}>
                                <h4>$300.00</h4>
                            </div>
                            <p style={{ fontSize: "14px" }}>
                                *Remind the reader what's in it for them if they buy your product
                            </p>
                            <h4 className="pt-5 sub_heading">
                                Exphasize Why Your Product Is Remarkable
                            </h4>
                            <div className="col-4 sub_para">
                                <img src="https://cdn.xxl.thumbs.canstockphoto.com/hand-pressing-a-button-with-the-text-benefits-icon-vector-for-graphic-design-logo-website-social-illustration_csp97010524.jpg" alt="#ImgNotFound" width="50px" height="50px" />
                                <h6>Benefit <br /> ONE</h6>
                            </div>
                            <div className="col-4 sub_para">
                                <img src="https://cdn.xxl.thumbs.canstockphoto.com/hand-pressing-a-button-with-the-text-benefits-icon-vector-for-graphic-design-logo-website-social-illustration_csp97010524.jpg" alt="#ImgNotFound" width="50px" height="50px" />
                                <h6>Benefit <br /> TWO</h6>
                            </div>
                            <div className="col-4 sub_para">
                                <img src="https://cdn.xxl.thumbs.canstockphoto.com/hand-pressing-a-button-with-the-text-benefits-icon-vector-for-graphic-design-logo-website-social-illustration_csp97010524.jpg" alt="#ImgNotFound" width="50px" height="50px" />
                                <h6>Benefit <br /> THREE</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
