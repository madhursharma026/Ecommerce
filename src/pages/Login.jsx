import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-screen">
            <div>

                <div className="text-center mb-5">
                    <img src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/destination/Ghee Wala%20IN/logo.png?v=1657952483" alt="#ImgNotFound" width="100px" height="40px" />
                </div>
                <div>
                    <h5 className="fw-semibold">
                        Log In
                    </h5>
                    <p className="fs-14">Enter your email and we'll send you a login code</p>
                    <input type="email" class="form-control p-2" style={{ width: "100%", fontSize: "18px" }} autoFocus />
                    <button type="button" class="btn btn-primary w-100 mt-3">Continue</button>
                    <div className="text-center">
                        <Link to="/" className="ms-auto">Privacy</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;