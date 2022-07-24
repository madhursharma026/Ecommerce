import { Link } from "react-router-dom";

function Signup() {
    return (
        <div>
            <div class="signup_container pt-3" style={{ marginTop: "15%" }}>
                <div class="signup_container_data">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 px-5 px-lg-1">
                            <div className="text-center">
                                <img src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/destination/Ghee Wala%20IN/logo.png?v=1657952483" alt="#ImgNotFound" width="100px" height="40px" />
                            </div>
                            <h5 className="pt-5">
                                Enter a code:
                            </h5>
                            <p style={{ fontSize: "18px", paddingBottom: "15px" }}>Sent to youremail@gmail.com</p>
                            <input type="text" class="form-control p-2" style={{ width: "100%", fontSize: "18px" }} placeholder="6-digit code" autoFocus />
                            <button type="button" class="btn btn-primary w-100 mt-3">Continue</button>
                            <div className="row pt-3">
                                <div className="col-6">
                                    <Link to="/login" className="pb-5 mb-5">Start new login</Link>
                                </div>
                                <div className="col-6">
                                    <Link to="/" className="pb-5 mb-5" style={{ float: "right" }}>Privacy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;


