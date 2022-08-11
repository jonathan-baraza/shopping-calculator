import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";

function Header({ itemsPrice }) {
  return (
    <div className="w-100 bg-dark p-4 text-warning d-flex align-items-center ps-2 pe-2 row">
      <h3
        className=" d-flex align-items-center mx-auto"
        style={{ width: "fit-content" }}
      >
        <BsCart4 className="me-2" />
        King's Shopping Calculator
        <FaCashRegister className="ms-2" />
      </h3>

      <h5 className="ms-auto w-auto me-4">
        <i>Total Ksh {itemsPrice}/=</i>
      </h5>
    </div>
  );
}

export default Header;
