import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge bg-secondary">₹{props.product.name}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            -
          </button>
          <button type="button" class="btn btn-warning">
            Price
          </button>
          <button type="button" class="btn btn-success">
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        <span>{props.product.quantity * props.product.Price}</span>
      </div>
    </div>
  );
}
