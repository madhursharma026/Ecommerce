import { Link } from "react-router-dom";

function MyProfile() {
    return (
        <>
            <h2><i className="fa fa-user"></i> Naveen Khunger</h2>
            <hr />
            <h5>Email: navrajkhunger123@gmail.com</h5>
            <br />
            <div className="row">
                <div className="col-6">
                    <h5>My Password</h5>
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <button type="button" class="btn btn-dark">Reset Password</button>
                </div>
            </div>
        </>
    );
}

export default MyProfile;
