import "../components/Headerhome.css";
import fashion from "../assests/fashion.jpg";
import footwear from "../assests/footwear.jpg";
import bath from "../assests/bath.jpg";
import bedding from "../assests/bedding.webp";
import toys from "../assests/toys.jpg";
import book from "../assests/books.jpg";
import freeship from "../assests/freeship.jpg";
import flat50 from "../assests/flat50.jpg";
import toys0ff from "../assests/toysoff.jpg";
import min30 from "../assests/min30.jpg";
import background from "../assests/homeimg.jpg";

export default function Home() {
  const myStyle = {
    backgroundImage: `url(${background})`
  };
  return (
    <>
      <section>
        <div class="section-head" style={myStyle}>
          <div>
            <p class="section-content">
              Kids are One Third of our Population and <br />
              All of our Future. <br />
              So Let's make One Third Of our Population
              <br /> Stylish.
            </p>
            <button class=" btn section-btn">
              Shop Now <span class="s-icon"> &#8594;</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div class="section-category">
          <h1>Featured Categories</h1>
          <div class="category">
            <div class="card">
              <img src={fashion} alt="Fashion" />
              <p class="card-head">Fashion</p>
            </div>
            <div class="card">
              <img src={footwear} alt="Footwear" />
              <p class="card-head">Footwear</p>
            </div>
            <div class="card">
              <img src={bath} alt="Bath" />
              <p class="card-head">Bath & Body</p>
            </div>
            <div class="card">
              <img src={bedding} alt="Bedding" />
              <p class="card-head">Bedding Essentials</p>
            </div>
            <div class="card">
              <img src={toys} alt="toys" />
              <p class="card-head">Toys</p>
            </div>
            <div class="card">
              <img src={book} alt="book" />
              <p class="card-head">Books</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-category">
          <h1>Top Deals of The Day</h1>
          <div class="category-offer">
            <div class="card-offer">
              <img src={freeship} alt="Freeship" />
              <div class="section-off">
                <p>
                  {" "}
                  Avail the offer of <br />
                  <span class="span-class">Free Shipping </span>
                  <br />
                  today till Midnight
                </p>
                <small>*On Selected Merchandise</small>
              </div>
            </div>
            <div class="card-offer">
              <img src={flat50} alt="Flat 50%" />
              <div class="section-off">
                <p>
                  {" "}
                  Hey, Mommies Grab the offer of <br />
                  <span class="span-class">Flat 50% </span>
                  <br />
                  on kids apparel
                </p>
                <small>*On Selected Merchandise</small>
              </div>
            </div>
            <div class="card-offer">
              <img src={min30} alt="30% off" />
              <div class="section-off">
                <p>
                  {" "}
                  Get Minimum
                  <br />
                  <span class="span-class">30% off </span>
                  <br />
                  on Baby products
                </p>
                <small>*On Selected Merchandise</small>
              </div>
            </div>
            <div class="card-offer">
              <img src={toys0ff} alt="Off On toys" />
              <div class="section-off">
                <p>
                  {" "}
                  Super exciting offers on Toys.
                  <br />
                  <span class="span-class">Shop Now</span>
                  <br />
                </p>
                <small>*On Selected Merchandise</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
