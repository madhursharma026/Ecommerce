
function ReviewAndRating() {
    return (
        <>
            <div class="card mt-3">
                <div class="card-body px-2">
                    <div class="card-title">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="col-2 col-lg-4 col-xl-3">
                                        <span className="username px-1" style={{ borderRadius: "100%", background: "green", color: "white", fontSize: "24px" }}>
                                            <b>JS</b>
                                        </span>
                                    </div>
                                    <div className="col-10 col-lg-8 col-xl-9" style={{ marginTop: "-10px" }}>
                                        <b style={{ fontSize: "12px" }}>Jeffrey S</b><br />
                                        <b style={{ fontSize: "12px" }}>Bunnle and relaxing</b>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 text-center">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                    <p class="card-text">Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description Benefits Description</p>
                </div>
            </div>
        </>
    );
}

export default ReviewAndRating;
