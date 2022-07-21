import { Link } from "react-router-dom";

function Signup() {
    return (
        <div>
            <div class="login_container pt-3">
                <div class="login_container_data">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 px-5 px-lg-1">
                            <h3>
                                Enter a code:
                            </h3>
                            <p className="pt-5" style={{ fontSize: "22px" }}>Sent to youremail@gmail.com</p>
                            <input type="text" class="form-control p-3" style={{ width: "100%", fontSize:"22px" }} placeholder="6-digit code" autoFocus />
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


