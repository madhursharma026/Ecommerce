import { Link } from 'react-router-dom';
import fbIcon from '../content/images/fbIcon.png'
import instaIcon from '../content/images/instaIcon.png'
import twiterIcon from '../content/images/twiterIcon.png'
import headerLogo from '../content/images/headerLogo.png'

export default function Footer() {
    return (
        <>
        <hr />
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
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Contact Us</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Map</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Form</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Contact Details</Link><br />
                    </div>
                    <div className="col-4 col-md col-lg pb-5">
                        <h5>Type</h5>
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Privacy Policy</Link><br />
                        <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>Terms and Service</Link><br />
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
            </div>
        </>
    );
}