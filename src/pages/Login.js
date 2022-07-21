import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <div class="login_container pt-3">
                <div class="login_container_data">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 px-5 px-lg-1">
                            <h1>
                                <h3>
                                    Log In:
                                </h3>
                            </h1>
                            <p className="pt-5" style={{ fontSize: "22px" }}>Enter your email and we'll send you a login code</p>
                            <input type="email" class="form-control p-3" style={{ width: "100%", fontSize:"22px" }} placeholder="youremail@gmail.com" autoFocus />
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
