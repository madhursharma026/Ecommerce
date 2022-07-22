import { Link } from "react-router-dom";
import ProductCardStyle from "../components/ProductCardStyle";
import product1 from '../content/images/product1.jpg'
import product2 from '../content/images/product2.jpg'
import { useEffect } from "react";
import FaqsCard from "./HomepageComponents/FaqsCard";

function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])


  return (
    <>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-4_d18f66cb-9768-4577-bea6-196883d65b8f_1900x.jpg?v=1630556957" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-1_10eadef0-d626-48a1-aaaf-4833a5faad8e_1900x.jpg?v=1630556978" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-2_1b705d15-c3ce-49d0-865b-060b0c9db1ab_1900x.jpg?v=1630556999" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* Homepage */}
      <div className="container-xl py-5">
        <div className="row pb-5 px-lg-5">
          <div className="col-md-6 pt-3">
            <ProductCardStyle productImg={product1} ratingQty="15" productName="Darjeeling Thurbo Spring Chinary Black" productDesc="A fresh vegetal $ fruity cup from Darjeeling" />
          </div>
          <div className="col-md-6 pt-3">
            <ProductCardStyle productImg={product2} ratingQty="15" productName="Darjeeling Thurbo Spring Chinary Black" productDesc="A fresh vegetal $ fruity cup from Darjeeling" />
          </div>
        </div>
        <h2>First/Spring Flush</h2>
        <p style={{ fontSize: "14px" }}>
          In India, the first flush teas are plucked between March and April following the first light showers of late February. Since this period coincides with the spring season, these pluckings are also referred to as spring teas or Easter teas. More information about first flushes here.
        </p>
        <br />
        <p style={{ fontSize: "14px" }}>
          Spring teas are produced in just about every tea growing region of India, including Darjeeling, Assam, Kangra, Nepal and the Nilgiris. But it's Darjeeling’s first flush teas that really reigns supreme. Here, in the cold mountain air, tea plants grow slowly until the start of spring, which concentrates the flavors in the leaves turning them crisp and immensely fragrant.
        </p>
        <p style={{ fontSize: "14px" }}>
          <b>Indulge In The Season’s Finest</b><br />
        </p>
        <p style={{ fontSize: "14px" }}>
          Spring brings with it the aroma of budding flowers, a welcome cool breeze, and the whisper of delicate tea leaves. Because the tea is harvested after a frost-filled winter, the leaves are in their tenderest form.
        </p>
        <p style={{ fontSize: "14px" }}>
          When brewed, these light emerald leaves offer a brighter and pleasant liquor with a distinctive floral aroma. When you take a sip of a spring tea, you enjoy an array of sophisticated flavors that range from a light freshness to a brisk astringency.
        </p>
        <p style={{ fontSize: "14px" }}>
          <b>Feel A Burst Of Energy</b><br />
        </p>
        <p style={{ fontSize: "14px" }}>
          First flush teas are delicate in flavor and retain the crispness of the mountain air of the Himalayas. There is a wide choice of green, white, and black Darjeeling teas. You can choose from our extensive collection of 2022 first flush teas that includes prized moonlight white teas from estates like Castleton and Margaret’s Hope, classic black teas from estates like Jungpana and Goomtee, and the much sought after clonals.
        </p>
        <h3 className="text-center main_heading pt-5"><b>WHY TEABOX IS THE FRESHEST?</b></h3>
        <div className="text-center px-lg-5 mx-lg-5">
          <h4 className="pt-3 sub_heading">INDIA'S FIRST 100% TRANSPARENT PROCUREMENT TEA PROCESS</h4>
          <p className="sub_para">Being just an hour and a half away from the iconic tea gardens of the world, we have devised a unique tea sourcing process. We procure teas within 24-48 hrs of sampling and keep them under <b>3-4% moisture levels.</b> Next, we hand sort & clean whole leaves for impurities, <b>vacuum pack,</b> and store them under controlled environment.</p>
          <h4 className="pt-3 sub_heading">WE ARE DISRUPTING A 200-YEAR-OLD TEA INDUSTRY</h4>
          <p className="sub_para">From <b>leaf to cup, fresh in 7 days,</b> we connect tea to all tea lovers.</p>
        </div>
        <div className="row mt-5 py-5" style={{ background: "#F5F5F5" }}>
          <div className="col-md-6 text-center">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/homepage_mobile_brand_usp_image_2_2c8382f1-17df-4794-ac4d-31458c1b4df2_765x.png?v=1630486264" alt="#ImgNotFound" className="img-fluid w-100" />
          </div>
          <div className="col-md-6 text-center">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/homepage_mobile_brand_usp_image_1_a790b47f-0c1e-44c3-9682-7d4c336b1543_765x.png?v=1630486228" alt="#ImgNotFound" className="img-fluid w-100" />
          </div>
        </div>
      </div>
      <div id="carouselExampleDark" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-4_d18f66cb-9768-4577-bea6-196883d65b8f_1900x.jpg?v=1630556957" class="d-block w-100" alt="#ImgNotFound" />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-1_10eadef0-d626-48a1-aaaf-4833a5faad8e_1900x.jpg?v=1630556978" class="d-block w-100" alt="#ImgNotFound" />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-2_1b705d15-c3ce-49d0-865b-060b0c9db1ab_1900x.jpg?v=1630556999" class="d-block w-100" alt="#ImgNotFound" />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/slider-image-desktop-3_5e5485b4-4a10-477e-8e0b-e098016e6ef5_1900x.jpg?v=1630557028" class="d-block w-100" alt="#ImgNotFound" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mx-3 pt-5">
        <div className="container-xl text-center p-5" style={{ background: "#339340", borderRadius: "10px" }}>
          <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/commitment_989243d4-451c-419d-b1c0-02462f0b56b7_480x.png?v=1632819495" alt="#ImgNotFound" />
          <h3 className="text-light pt-4">OUR COMMITMENT TO PLANET EARTH</h3>
          <p className="text-light px-md-5" style={{ fontSize: "20px" }}>
            We are a part of the problem. Hence, we are working towards being the solution. By 2024, we have pledged to reduce our plastic consumption by 80%.
          </p>
          <button type="button" class="btn btn-light px-5 mt-3" style={{ fontSize: "20px" }}>Know More</button>
        </div>
      </div>
      <h3 className="pt-5 text-center py-4 main_heading"><b>WHAT PEOPLE ARE SAYING</b></h3>
      <div className="container-lg">
        <div id="what_people_are_saying" class="carousel slide mx-lg-5" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <FaqsCard />
            </div>
            <div class="carousel-item">
              <FaqsCard />
            </div>
            <div class="carousel-item">
              <FaqsCard />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#what_people_are_saying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#what_people_are_saying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <h1 className="pt-5 text-center pb-3 main_heading">YOU ASKED. <span className="text-success">WE ANSWERED.</span></h1>
        <div className="mx-lg-5 px-lg-5 pb-3">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" style={{ border: "0" }}>
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed py-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p className="px-3 px-lg-5" style={{ fontSize: "22px", lineHeight: "33px" }}>Do you expect me to pay this much when I can get the same tea at reduced prices from other brands?</p>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="mx-lg-5 px-lg-5 accordion-body px-3 px-lg-5" style={{ fontSize: "18px" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item" style={{ border: "0" }}>
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed py-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <p className="px-3 px-lg-5" style={{ fontSize: "22px", lineHeight: "33px" }}>Where do you ship and pack your teas from?</p>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="mx-lg-5 px-lg-5 accordion-body px-3 px-lg-5" style={{ fontSize: "18px" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item" style={{ border: "0" }}>
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed py-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <p className="px-3 px-lg-5" style={{ fontSize: "22px", lineHeight: "33px" }}>Do you expect me to pay this much when I can get the same tea at reduced prices from other brands?</p>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="mx-lg-5 px-lg-5 accordion-body px-3 px-lg-5" style={{ fontSize: "18px" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>

            <div class="accordion-item" style={{ border: "0" }}>
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed py-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <p className="px-3 px-lg-5" style={{ fontSize: "22px", lineHeight: "33px" }}>Where do you ship and pack your teas from?</p>
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="mx-lg-5 px-lg-5 accordion-body px-3 px-lg-5" style={{ fontSize: "18px" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-lg">
        <div className="row text-center py-4">
          <div className="col-lg-3 col-md-4 col-6">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/painpoint-1_480x.png?v=1628072780" alt="#ImgNotFOund" width="50px" height="50px" /><br />
            <h4>100% guarantee</h4>
            <p style={{ fontSize: "14px" }}>Free replacement if you not satisfied</p>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/painpoint-1_480x.png?v=1628072780" alt="#ImgNotFOund" width="50px" height="50px" /><br />
            <h4>100% guarantee</h4>
            <p style={{ fontSize: "14px" }}>Free replacement if you not satisfied</p>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/painpoint-1_480x.png?v=1628072780" alt="#ImgNotFOund" width="50px" height="50px" /><br />
            <h4>100% guarantee</h4>
            <p style={{ fontSize: "14px" }}>Free replacement if you not satisfied</p>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <img src="https://cdn.shopify.com/s/files/1/1865/1011/files/painpoint-1_480x.png?v=1628072780" alt="#ImgNotFOund" width="50px" height="50px" /><br />
            <h4>100% guarantee</h4>
            <p style={{ fontSize: "14px" }}>Free replacement if you not satisfied</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
