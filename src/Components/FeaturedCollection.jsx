import React from "react";
import AddToCartIcon from "./AddToCartIcon";

export default function FeaturedCollection() {
  return (
    <section className="featured-collection">
      <h2 className="serif-font">Featured Collection</h2>
      <p>
        Explore our signature chocolates, each one a testament to
        craftsmanship and indulgence
      </p>

      <div className="product-grid">
        {/* Product Card 1 */}
        <div className="product-card">
          <img
            src="https://i.pinimg.com/736x/85/79/3a/85793a29021c29fee5af6af324b3ac38.jpg"
            alt="Artisan Truffle Collection"
          />
          <div className="product-info">
            <h3 className="serif-font">Artisan Truffle Collection</h3>
            <p>Handcrafted truffles with exotic flavors and gold accents</p>
            <span className="price">$45.00</span>
            <button className="btn-add-to-cart">
              <AddToCartIcon /> Add To Cart
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="product-card">
          <img
            src="https://i.pinimg.com/736x/23/ea/8d/23ea8d170cdaf36ec62657dcd1bbb478.jpg"
            alt="Dark Sea Salt Chocolate"
          />
          <div className="product-info">
            <h3 className="serif-font">Dark Sea Salt Chocolate</h3>
            <p>70% cacao with Himalayan pink salt crystals</p>
            <span className="price">$29.00</span>
            <button className="btn-add-to-cart">
              <AddToCartIcon /> Add To Cart
            </button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="product-card">
          <img
            src="https://i.pinimg.com/1200x/d2/a0/43/d2a043bbd5b737c8aaccb8b43c465cda.jpg"
            alt="Premium Gift Box"
          />
          <div className="product-info">
            <h3 className="serif-font">Premium Gift Box</h3>
            <p>Curated selection in luxury presentation box</p>
            <span className="price">$79.00</span>
            <button className="btn-add-to-cart">
              <AddToCartIcon /> Add To Cart
            </button>
          </div>
        </div>
      </div>

      <button className="btn-view-all">View All Products</button>
    </section>
  );
}
