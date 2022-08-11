import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
function Item({ index, item, updateStatus, deleteItem }) {
  return (
    <div
      className="d-flex align-items-center justify-content-between ps-3 pe-3 rounded m-3 p-3"
      style={{ backgroundColor: "#edeff1", position: "relative" }}
    >
      <span
        className={`${item.completed ? "bg-danger" : "bg-success"}`}
        style={{
          width: "5px",
          position: "absolute",
          left: "0px",
          top: "0px",
          bottom: "0px",
        }}
      ></span>
      <div
        style={{ textDecoration: `${item.completed ? "line-through" : ""}` }}
      >
        <span className="me-1">
          <b>{index + 1}.</b>
        </span>
        <span>
          <b>{item.name}</b>
        </span>
        <span className="ms-3">
          <b>
            Ksh<span className="ms-1">{item.price}/=</span>
          </b>
        </span>
      </div>
      <div className="btns d-flex align-items-center">
        <FiEdit
          color={`${item.completed ? "#939faa" : "#007bff"}`}
          className="react-icon me-3"
          size={"20px"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateStatus(index);
          }}
        />
        <RiDeleteBin5Fill
          color="#dc3545"
          className="react-icon me-3"
          size={"20px"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            deleteItem(index);
          }}
        />
      </div>
    </div>
  );
}

export default Item;
