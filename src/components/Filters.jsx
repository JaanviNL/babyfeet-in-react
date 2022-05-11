import { Link } from "react-router-dom";
import "../styles/store.css";

export default function Filters(){

    return(
        <div className="filters">
        <form>
          <div className="flex-row">
            <h6>
              <i className="fas fa fa-filter icon"></i>Filter
            </h6>
            <Link to ="/store" className="clr-btn">Clear All</Link>
          </div>
          <div className="flex-column">
            <label className="filter-label">Gender</label>
            <label>
              <input type="radio" name="gender" value="girl" /> Girl
            </label>
            <label>
              <input type="radio" name="gender" value="boy" /> Boy
            </label>
          </div>
          <hr className="break-line" />
          <div className="flex-column">
            <label className="filter-label">Age</label>
            <label>
              {" "}
              <input type="checkbox" name="0-3M" id="" /> 0 - 6M
            </label>

            <label>
              {" "}
              <input type="checkbox" name="6M-12M" id="" /> 6M - 12M
            </label>

            <label>
              {" "}
              <input type="checkbox" name="1Y-2Y" id="" /> 1Y-2Y
            </label>
            <label>
              {" "}
              <input type="checkbox" name="2Y-4Y" id="" /> 2Y - 4Y
            </label>
          </div>
          <hr className="break-line" />
          <div className="flex-column ">
            <label className="filter-label">Category</label>
            <div className=" flex-column ">
              <label>
                {" "}
                <input type="checkbox" name="Set & Suits" id="" /> Set & Suits
              </label>
             
              <label>
                {" "}
                <input type="checkbox" name="Bedding" id="" /> Bedding
              </label>
              <label>
                {" "}
                <input type="checkbox" name="Footwear" id="" /> Footwear
              </label>
              <label>
                {" "}
                <input type="checkbox" name="Toys" id="" /> Toys
              </label>

              
            </div>
          </div>
          <hr className="break-line" />
          <div className="flex-column">
            <label className="filter-label">Price</label>
            <label>
              {" "}
              <input type="checkbox" name="minimum" id="" /> ₹ 0 - ₹ 500
            </label>
            <label>
              {" "}
              <input type="checkbox" name="medium" id="" /> ₹ 500 - ₹ 1000
            </label>
            <label>
              {" "}
              <input type="checkbox" name="average" id="" /> ₹ 1000 - ₹ 2000
            </label>
            <label>
              {" "}
              <input type="checkbox" name="max" id="" /> ₹ 2000 - ₹ 5000
            </label>
          </div>
        </form>
      </div>
    )
}