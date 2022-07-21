import { Link } from "react-router-dom";
import BelieveCardAfterMDScrn from "./ProductPageComponents/BelieveCardAfterMDScrn";
import BelieveCardBeforeMDScrn from "./ProductPageComponents/BelieveCardBeforeMDScrn";
import BenefitsCard from "./ProductPageComponents/BenefitsCard";
import RelatedProductCard from "./RelatedProductCard/RelatedProductCard";
import ReviewAndRating from "./ReviewAndRating/ReviewAndRating";

function NewProductPage() {
    return (
        <div className="container-xl">
            <div className="row pt-3">
                <div className="col-lg-6">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner text-center">
                            <div class="carousel-item active" style={{ minHeight: "400px" }}>
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_1_1_7c8337ba-ebd3-43d4-a270-8230d51b3250_1_1024x.jpg?v=1653632514" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item" style={{ minHeight: "400px" }}>
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_2_1024x.jpg?v=1653632514" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item" style={{ minHeight: "400px" }}>
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_3_1962717b-3459-44ed-a696-1bac6ab0ffb9_1024x.jpg?v=1653632514" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item" style={{ minHeight: "400px" }}>
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/BLACK_TEA_100gm_1634db94-bc2c-472b-bf9e-fe86b8600471_1024x.jpg?v=1653567234" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                            <div class="carousel-item" style={{ minHeight: "400px" }}>
                                <div className="px-5">
                                    <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1024x.jpg?v=1653567234" class="d-block w-100" alt="#ImgNotFound" />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 px-1 px-lg-3">
                    <h3>Darjeeling Castleton Spring Chinary Black</h3>
                    <div className="row">
                        <div className="col">Darjeeling Black</div>
                        <div className="col" style={{ textAlign: "right" }}>
                            <span>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                                <i class="fa fa-star-half-o" style={{ color: "#EEC200" }}></i>
                                (15)
                            </span>
                        </div>
                    </div>
                    <p className="text-muted" style={{ fontSize: "20px" }}>
                        A fruity-nutty cup, fresh from Darjeeling
                    </p>
                    <h6>Buying Options</h6>
                    <div className="row pt-3">
                        <div className="col" style={{ display: "flex" }}>
                            <div class="card w-100" style={{ border: "2px solid #009340" }}>
                                <div class="card-body py-1">
                                    <h6 className="text-success text-center" style={{ fontSize: "15px" }}>
                                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/loose-leaf-green.svg?v=3326972369061157883" alt="#ImgNotFound" width="15px" height="15px" /> Loose leaf <br />
                                        100gm | 50 cups
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ display: "flex" }}>
                            <div class="card w-100">
                                <div class="card-body py-1">
                                    <h6 className="text-center" style={{ fontSize: "15px" }}>
                                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/loose-leaf.svg?v=9469339130553571855" alt="#ImgNotFound" width="15px" height="15px" /> Loose leaf <br />
                                        300gm | 120 cups
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ display: "flex" }}>
                            <div class="card w-100">
                                <div class="card-body py-1">
                                    <h6 className="text-center" style={{ fontSize: "15px" }}>
                                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/loose-leaf.svg?v=9469339130553571855" alt="#ImgNotFound" width="15px" height="15px" /> Loose leaf <br />
                                        500gm | 250 cups
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="pt-4"><del>₹749</del> ₹549</h4>
                    <div className="row">
                        <div className="col-xl-4 text-center pb-3">
                            <button type="button" class="btn" style={{ backgrond: "transparent", height: "42px", marginTop: "-12px", borderRadius: "0", border: "0" }}><i class="fa fa-plus"></i></button><input type="text" style={{ width: "80px", fontSize: "24px" }} defaultValue="1" /><button type="button" class="btn" style={{ backgrond: "transparent", height: "42px", marginTop: "-12px", borderRadius: "0", border: "0" }}><i class="fa fa-minus"></i></button>
                        </div>
                        <div className="col-6 col-xl-4 pb-3">
                            <button type="button" class="btn btn-secondary w-100">Add to Cart</button>
                        </div>
                        <div className="col-6 col-xl-4 pb-3">
                            <button type="button" class="btn btn-primary w-100">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-xl-5 believe_car_before_md_scrn pt-5">
                <h1 className="text-center why_choose_us_heading">Why Choose Us</h1>
                <BelieveCardBeforeMDScrn />
            </div>
            <div className="believe_car_after_md_scrn pt-5">
                <h1 className="text-center why_choose_us_heading">Why Choose Us</h1>
                <BelieveCardAfterMDScrn />
            </div>
            <h1 className="text-center freshness_journey_heading">FRESHNESS JOURNEY</h1>
            <div className="heading_para_size text-center pb-3">
                Our Unique $ Transparent procurement process, from <b>leaf to cup</b>
            </div>
            <div className="text-center">
                <div className="row">
                    <div className="col-4 col-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-1.svg?v=12636508475391262561" alt="#ImgNotFound" width="100px" height="100px" />
                        <h6 style={{ fontSize: "15px" }}>Picked & Processed</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>23rd-24th May'22</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-2.svg?v=6602855577405003226" alt="#ImgNotFound" width="100px" height="100px" />
                        <h6 style={{ fontSize: "15px" }}>Arrived at Teabox</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>25th May'22</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-3.svg?v=12505986752712508259" alt="#ImgNotFound" width="100px" height="100px" />
                        <h6 style={{ fontSize: "15px" }}>Sorted & Cleaned</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>25th May'22</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-4.svg?v=4606512964122051706" alt="#ImgNotFound" width="100px" height="100px" />
                        <h6 style={{ fontSize: "15px" }}>Vacuum Packed</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>25th May'22</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-5.svg?v=14189309169453830059" alt="#ImgNotFound" width="100px" height="100px" />
                        <h6 style={{ fontSize: "15px" }}>Stored @ -5°c </h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>25th May'22</p>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-6.svg?v=3201811780339525507" alt="#ImgNotFound" width="100px" height="100px" />
                        <h6 style={{ fontSize: "15px" }}>Ready to Ship</h6>
                        <p className="text-success" style={{ fontSize: "12px" }}>26th May'22</p>
                    </div>
                </div>
            </div>
            <div className="videoSection py-5">
                <h1 className="text-center freshness_journey_heading">Product Video</h1>
                <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <h1 className="text-center know_your_ghee_heading"><u>KNOW YOUR Ghee</u></h1>
            <div className="py-3">
                <h1 className="text-center know_your_tea_heading">KNOW YOUR TEA</h1>
                <div className="text-center">
                    <p className="heading_para_size">Originally known as Kumseri, the Castleton tea estate was established in 1855. Located in Kurseong, Darjeeling, this estate has 130-year-old chinary bushes. Picked fresh at 4000 feet, this chinary black we have procured is an impressive one! Vegetal, stone-fruity with nutty accents, this Indian Single Estate is a captivating cup of First Flush 2022, fresh from the misty hills!</p>

                    <div className="row p-5">
                        <h1 className="text-center product_speacfication_heading pb-4">Product Specifications</h1>
                        <div className="col-4">
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-5_green_de520591-ebda-4c3b-b443-34b96341f545.svg?v=1632141212" alt="#ImgNotFound" width="50px" height="50px" />
                            <h6 style={{ fontSize: "15px" }}>Season</h6>
                            <p className="text-success" style={{ fontSize: "12px" }}>First Flush</p>
                        </div>
                        <div className="col-4">
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-6_green_1c66ff0d-ebe7-4f93-b6d4-450aa8b79260.svg?v=1632141212" alt="#ImgNotFound" width="50px" height="50px" />
                            <h6 style={{ fontSize: "15px" }}>Specialty</h6>
                            <p className="text-success" style={{ fontSize: "12px" }}>Chinary</p>
                        </div>
                        <div className="col-4">
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Caffeine.svg?v=1632222600" alt="#ImgNotFound" width="50px" height="50px" />
                            <h6 style={{ fontSize: "15px" }}>Caffeine</h6>
                            <p className="text-success" style={{ fontSize: "12px" }}>Medium</p>
                        </div>
                        <div className="col-4">
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-2_green_ee57406e-b4a2-40a7-9344-df476ed97acb.svg?v=1632141212" alt="#ImgNotFound" width="50px" height="50px" />
                            <h6 style={{ fontSize: "15px" }}>Time Of Day</h6>
                            <p className="text-success" style={{ fontSize: "12px" }}>Afternoon</p>
                        </div>
                        <div className="col-4">
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Tea_Grade_Logo_1.svg?v=1632138898" alt="#ImgNotFound" width="50px" height="50px" />
                            <h6 style={{ fontSize: "15px" }}>Grade</h6>
                            <p className="text-success" style={{ fontSize: "12px" }}>FTGFOP1</p>
                        </div>
                        <div className="col-4">
                            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Invoice_Logo_1.svg?v=1632138898" alt="#ImgNotFound" width="50px" height="50px" />
                            <h6 style={{ fontSize: "15px" }}>Invoice </h6>
                            <p className="text-success" style={{ fontSize: "12px" }}>EX-5</p>
                        </div>
                    </div>

                    <h1 className="text-center benefits_heading pb-4">Benefits</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-4">
                            <BenefitsCard />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BenefitsCard />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BenefitsCard />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BenefitsCard />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BenefitsCard />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <BenefitsCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-center cartificate_heading">Certificate</h1>
                <div className="row">
                    <div className="col text-center">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Rain-Forest-Alliance_480x.jpg?v=14369409827332263818" alt="#ImgNotFound" width="200px" height="200px" />
                    </div>
                    <div className="col text-center">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/Ethical-Trade-Partnership_480x.jpg?v=4039903149469949543" alt="#ImgNotFound" width="200px" height="200px" />
                    </div>
                    <div className="col text-center">
                        <img src="https://www.usda.gov/sites/default/files/Organic%20Seal%20-%20small.png" alt="#ImgNotFound" width="200px" height="200px" />
                    </div>
                </div>
            </div>
            <div className="py-5 px-1 px-lg-3">
                <h1 className="text-center your_experience">EXPERIENCE</h1>
                <div className="row pt-5">
                    <div className="col-md-6 order-2 order-md-1">
                        <h3>Appearance</h3>
                        <p className="heading_para_size">
                            Champagne
                        </p>
                        <h3>Taste</h3>
                        <p className="heading_para_size">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi ipsa culpa? Ad modi animi corporis libero, ipsam voluptatem molestiae quas optio repellat iusto in, asperiores quam neque amet suscipit laboriosam odit, quidem quaerat ipsa sapiente eligendi! Maxime repellat amet voluptatem eum excepturi labore exercitationem distinctio quaerat repudiandae, eos quam facilis sunt itaque? Cupiditate minima quo consequuntur asperiores sequi? Consectetur aspernatur beatae odit? Pariatur, quam tempora suscipit rerum consequatur et nesciunt, iusto error ut eligendi excepturi quod, cum neque non velit dolorum eum fuga molestias est laboriosam enim doloremque illum perspiciatis. Dolores tempore accusantium blanditiis sequi, ex natus beatae excepturi.
                        </p>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <img src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234" alt="#ImgNotFound" className="w-100" />
                    </div>
                </div>
                <h1 className="text-center How_to_Check_Ghee_Purity_heading py-5"><u>How to Check Ghee Purity-</u></h1>
                <div className="px-xl-5 mx-xl-5">
                    <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-12 col-md-4">
                            <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-12 col-md-4">
                            <video width="100%" controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <h1 className="text-center How_to_Check_Ghee_Purity_heading py-5"><u>How to Check Ghee Purity-</u></h1>
                <h1 className="text-center know_your_tea_heading">KNOW YOUR TEA</h1>
                <div classsName="text-center">
                    <p className="heading_para_size">Originally known as Kumseri, the Castleton tea estate was established in 1855. Located in Kurseong, Darjeeling, this estate has 130-year-old chinary bushes. Picked fresh at 4000 feet, this chinary black we have procured is an impressive one! Vegetal, stone-fruity with nutty accents, this Indian Single Estate is a captivating cup of First Flush 2022, fresh from the misty hills!</p>
                </div>
                <h1 className="text-center review_and_rating_heading py-5"><u>Rating and Reviews</u></h1>
                <h4>Rating and Reviews</h4>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-lg-5 text-center">
                                <h1>4.97</h1>
                                <h4><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></h4>
                                <h6>40 reviews</h6>
                            </div>
                            <div className="col-lg-7 text-center">
                                <h6>5 <progress value="95" max="100" style={{ background: "#51BE66" }}></progress></h6>
                                <h6>4 <progress value="5" max="100" style={{ background: "#51BE66" }}></progress></h6>
                                <h6>3 <progress value="00" max="100" style={{ background: "#51BE66" }}></progress></h6>
                                <h6>2 <progress value="00" max="100" style={{ background: "#51BE66" }}></progress></h6>
                                <h6>1 <progress value="00" max="100" style={{ background: "#51BE66" }}></progress></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{ textAlign: 'right' }}>
                        <button type="button" class="btn text-light" style={{ background: "#51BE66" }}>WRITE A REVIEW</button>
                    </div>
                </div>
                <hr />
                <span class="dropdown px-1 px-lg-3">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px", border: "1px solid black", borderRadius: "0" }}>
                        <span style={{ fontSize: "14px" }}>Sort by Featured</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>

                    </ul>
                </span>
                <span class="dropdown px-1 px-lg-3">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px", border: "1px solid black", borderRadius: "0" }}>
                        <span style={{ fontSize: "14px" }}>Rating All</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                        <li><Link to="/" class="dropdown-item">Option</Link></li>
                    </ul>
                </span>
                <span class="dropdown px-1 px-lg-3">
                    <input type="checkbox" />&ensp;
                    With media
                </span>
                <div className="row pt-4">
                    <div className="col-md-6 col-lg-4">
                        <ReviewAndRating />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ReviewAndRating />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ReviewAndRating />
                    </div>
                </div>
                <h1 className="text-center related_project_heading pt-5">Related Products</h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <RelatedProductCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <RelatedProductCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <RelatedProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProductPage;
