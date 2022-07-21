import { Link } from "react-router-dom";

function MyOrder() {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h4>My Orders- Total 0</h4>
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <button type="button" class="btn btn-dark">TRACK YOUR ORDER</button>
                </div>
            </div>
            <h1 className="text-center pt-3">
                No Order Found
            </h1>
        </>
    );
}

export default MyOrder;
