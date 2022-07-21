
function RelatedProductCard() {
    return (
        <>
            <div class="card mt-3">
                <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234" class="card-img-top w-100" alt="#ImgNotFound" />
                    <div class="card-body px-2">
                        <h5 class="card-title text-muted">ACCESSORIES</h5>
                        <div className="row">
                            <div className="col-md-6">
                            <h5 class="card-title">High Fashion</h5>
                            </div>
                            <div className="col-md-6" style={{textAlign:"right"}}>
                            <h5 class="card-title"><del>€65</del> €55.0</h5>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default RelatedProductCard;