import { Link } from "react-router-dom";
import CardStyle from "../components/CardStyle";

function Home() {
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
            <CardStyle productImg="https://cdn.shopify.com/s/files/1/1865/1011/products/FFTBCHB_2_480x.jpg?v=1653632239" ratingQty="15" productName="Darjeeling Thurbo Spring Chinary Black" productDesc="A fresh vegetal $ fruity cup from Darjeeling" />
          </div>
          <div className="col-md-6 pt-3">
            <CardStyle productImg="https://cdn.shopify.com/s/files/1/1865/1011/products/FFTBCHB_2_480x.jpg?v=1653632239" ratingQty="15" productName="Darjeeling Thurbo Spring Chinary Black" productDesc="A fresh vegetal $ fruity cup from Darjeeling" />
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
      </div>
    </>
  );
}

export default Home;
