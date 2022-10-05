import category from "./App.module.css";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
} from "../../image";

function Category() {
  return (
    <>
      <div className={category.wapper}>
        <div className={`row  ${category.title}`}>
          <p>Carefully created collections</p>
          <h3>browse our categories</h3>
        </div>
        <div className={`row ${category.item1}`}>
          <a className="col-md-6" href="/shop">
            <img src={product1} />
          </a>
          <a className="col-md-6" href="/shop">
            <img src={product2} />
          </a>
        </div>
        <div className={`row ${category.item2}`}>
          <a className="col-md-4" href="/shop">
            <img src={product3} />
          </a>
          <a className="col-md-4" href="/shop">
            <img src={product4} />
          </a>
          <a className="col-md-4" href="/shop">
            <img src={product5} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Category;
