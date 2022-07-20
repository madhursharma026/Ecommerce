import { Link } from 'react-router-dom';
import fbIcon from '../content/images/fbIcon.png'
import instaIcon from '../content/images/instaIcon.png'
import twiterIcon from '../content/images/twiterIcon.png'
import footerImg from '../content/images/footerImg.png'
import headerLogo from '../content/images/headerLogo.png'

export default function Footer() {
    return (
        <>
            <img src={footerImg} alt="#imgNotFound" className='img-fluid' style={{ background: "#EAEAEA" }} />
            <br />
            <div className="container-xl p-3">
                <div className='option_after_md_scrn'>
                    <h5 className='pt-5'>Take an <span className='text-success'>extra 10%</span> off your order</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Your Email" aria-describedby="button-addon2" />
                        <button class="btn btn-success" type="button" id="button-addon2">Get Promo</button>
                    </div>
                    <p style={{ fontSize: "10px" }}>We'll also send you delicious recipes, product updates, and more.</p>
                </div>
                <div className="row pt-5">
                    <div className="col-4 col-md col-lg pb-5">
                        <h5>Region</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Darjeeling</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Assam</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Nilgiri</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Sikkim</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Meghalaya</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Exclusive Partners</Link><br />
                    </div>
                    <div className="col-4 col-md col-lg pb-5">
                        <h5>Type</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Black Tea</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Green Tea</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Oolong Tea</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>White Tea</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Chai Tea</Link><br />
                    </div>
                    <div className="col-4 col-md col-lg pb-5">
                        <h5>Speciality</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Best Selling</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>New</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Samples</Link><br />
                    </div>
                    <div className="col-4 col-md col-lg pb-5">
                        <h5>Business</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Corporate Gifting</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Affiliates</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Sustainability</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Careers</Link><br />
                    </div>
                    <div className="col-4 col-lg pb-5">
                        <h5>About Us</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>About Teabox</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Shipping & Delivery</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Sitemap</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Testimonials</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Blog</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Brew Guide</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Tea Quiz</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Press Release</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Track Order</Link><br />
                        <Link to="/" style={{ textDecoration: "none" }} className="text-success">Rewards</Link><br />
                    </div>
                    <div className="col-4 col-lg pb-5">
                        <h5>Follow us</h5>
                        <div className="row">
                            <div className="col">
                                <img src={fbIcon} alt="#ImgNotFound" className='img-fluid' />
                            </div>
                            <div className="col">
                                <img src={instaIcon} alt="#ImgNotFound" className='img-fluid' />
                            </div>
                            <div className="col">
                                <img src={twiterIcon} alt="#ImgNotFound" className='img-fluid' />
                            </div>
                        </div>
                        <div className="option_before_md_scrn">
                            <h5 className='pt-5'>Take an <span className='text-success'>extra 10%</span> off your order</h5>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Email" aria-describedby="button-addon2" />
                                <button class="btn btn-success" type="button" id="button-addon2">Get Promo</button>
                            </div>
                            <p style={{ fontSize: "10px" }}>We'll also send you delicious recipes, product updates, and more.</p>
                        </div>
                    </div>
                </div>
                <div className="pb-5 footer_last_options_before_md_scrn">
                    <img src={headerLogo} alt="#imgNotFound" width="145px" height="45px" />&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Contact us</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Privacy policy</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Terms</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Refund policy</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Sustainability</Link>&emsp;
                    <span>2022</span>
                </div>
                <div className="px-5 pb-5 footer_last_options_after_md_scrn text-center">
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Contact us</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Privacy policy</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Terms</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Refund policy</Link>&emsp;
                    <Link to="/" style={{ textDecoration: "underline" }} className="text-dark">Sustainability</Link>&emsp;
                    <br />
                    <img src={headerLogo} alt="#imgNotFound" width="145px" height="45px" />&emsp;
                </div>
            </div>
        </>
    );
}