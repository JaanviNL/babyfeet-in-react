import "./Headerhome.css";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import { useWishList } from "../context/wishlist-context";

export default function Header() {
  const { wishlist } = useWishList();

  return (
    <div className="header-nav">
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src={logo} alt="Logo Img" />
        </Link>
      </div>
      <div className="search">
        <input
          className="input"
          placeholder="Search for products, brands and more..."
        ></input>
        <i className="far fa fa-search icon search-icon"></i>
      </div>

      <div className="link-nav ">
        <Link to="/store" className="link">
          <i className="fa fa-solid fa-store icon"></i>
          Store
        </Link>
        <Link to="/wishlist" className="link">
          <i className="far fa-heart icon"></i>Wishlist
         {
           wishlist.length>0 && <span className="icon-badge">{wishlist.length}</span>
         } 
        </Link>
        <Link to="/cart" className="link">
          <i className="fas fa-shopping-cart icon"></i>Cart
        </Link>
        <Link to="/login" className="link">
          <i className="far fa-user icon"></i>Account
        </Link>
      </div>
    </div>
  );
}
