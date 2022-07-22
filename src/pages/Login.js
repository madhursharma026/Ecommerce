import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <div class="login_container pt-3" style={{ marginTop: "15%" }}>
                <div class="login_container_data">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 px-5 px-lg-1">
                            <div className="text-center">
                                <img src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/destination/Teabox%20IN/logo.png?v=1657952483" alt="#ImgNotFound" width="100px" height="40px" />
                            </div>
                            <h5 className="pt-5">
                                Log In:
                            </h5>
                            <p style={{ fontSize: "20px", paddingBottom: "15px" }}>Enter your email and we'll send you a login code</p>
                            <input type="email" class="form-control p-2" style={{ width: "100%", fontSize: "18px" }} autoFocus />
                            <button type="button" class="btn btn-primary w-100 mt-3">Continue</button>
                            <Link to="/" className="pt-3 pb-5 mb-5" style={{ float: "right" }}>Privacy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;