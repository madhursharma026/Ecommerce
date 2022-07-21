import { Link } from 'react-router-dom';
import headerLogo from '../content/images/headerLogo.png'

export default function Header() {
    return (
        <>
            <div className="header_options_before_xl_scrn">
                <nav class="navbar navbar-expand-xl bg-light">
                    <div class="container-xxl">
                        <Link className='navbar-brand' to='/'>
                            <img src={headerLogo} alt="#imgNotFound" width="145px" height="45px" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link text-dark" to="#" style={{ fontSize: "14px" }}><b>HOME</b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-dark" to="#" style={{ fontSize: "14px" }}><b>PRODUCTS</b></Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-dark" to="#" style={{ fontSize: "14px" }}><b>CONTACT US</b></Link>
                                </li>
                            </ul>
                        </div>

                        <Link class="nav-link text-dark px-3" to="#" style={{ fontSize: "14px" }}>
                            <b>
                                <div className="text-center">
                                    <i class="fa fa-user" style={{ fontSize: "24px" }}></i><br />
                                </div>
                                LOGIN
                            </b>
                        </Link>
                        <Link class="nav-link text-dark px-3" to="/add_to_cart" style={{ fontSize: "14px" }}>
                            <b>
                                <div className="text-center">
                                    <i class="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i>
                                    <span class='cart-value cart-value-warning' id='cart-value-id'>0</span>
                                </div>
                                CART
                            </b>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="header_options_after_xl_scrn header_bg text-center">
                <div className="row">
                    <div className="col pt-2">
                        {/* <Link class="nav-link text-light" to="#" style={{ fontSize: "16px" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i class="fa fa-bars" style={{ fontSize: "18px" }}></i><br />
                            Menu
                        </Link> */}
                        <button type="button" class="btn px-3 text-light" style={{ background: "transparent", border: "1px solid black", marginTop: "-5px" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i class="fa fa-bars" style={{ fontSize: "18px" }}></i><br />
                            Menu
                        </button>
                    </div>
                    <div className="col pt-2">
                        <Link class="nav-link text-light" to="#" style={{ fontSize: "16px" }}>
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Mobile_logo_1.webp?v=1656653088" alt="#ImgNotFound" height="25px" width="25px" /><br />
                            Home
                        </Link>
                    </div>
                    <div className="col pt-2">
                        <Link class="nav-link text-light" to="#" style={{ fontSize: "16px" }}>
                            <i class="fa fa-search" style={{ fontSize: "18px" }}></i><br />
                            Search
                        </Link>
                    </div>
                    <div className="col pt-2">
                        <Link class="nav-link text-light" to="#" style={{ fontSize: "16px" }}>
                            <i class="fa fa-shopping-cart" style={{ fontSize: "18px" }}></i>
                            <span class='cart-value cart-value-warning' id='cart-value-id'>0</span><br />
                            Cart
                        </Link>
                    </div>
                    <div className="col pt-2">
                        <Link class="nav-link text-light" to="#" style={{ fontSize: "16px" }}>
                            <i class="fa fa-user" style={{ fontSize: "18px" }}></i><br />
                            Profile
                        </Link>
                    </div>
                </div>

                <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header" style={{ background: "black", height: "70px" }}>
                        <div class="offcanvas-title" id="offcanvasExampleLabel">
                            <div className="row text-light">
                                <div className="col-2">
                                    <i class="fa fa-user-circle-o" style={{ fontSize: "40px" }}></i>
                                </div>
                                <div className="col-10">
                                    <h6>Welcome! <br />
                                        <Link to='/' style={{ fontSize: "14px", textDecoration: "none", color: "white" }}>Login/Signup</Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <h6 className='text-light p-2' data-bs-dismiss="offcanvas" aria-label="Close" style={{ cursor: "pointer" }}><i class="fa fa-close"></i></h6>
                    </div>
                    <Link to="/" className='pt-3 px-3' style={{ color: "black", textDecoration: "none", textAlign: "left" }}><b>HOME</b></Link>
                    <hr className='p-0' />
                    <Link to="/" className='px-3' style={{ color: "black", textDecoration: "none", textAlign: "left" }}><b>PRODUCTS</b></Link>
                    <hr className='p-0' />
                    <Link to="/" className='px-3' style={{ color: "black", textDecoration: "none", textAlign: "left" }}><b>CONTACT US</b></Link>
                </div>
            </div>
        </>
    );
}