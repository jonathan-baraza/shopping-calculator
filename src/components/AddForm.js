import { useState } from "react";
import swal from "sweetalert";

function AddForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const validateInputs = () => {
    if (!name) {
      swal("You must enter the item's name", "", "warning");
    } else if (!price) {
      swal("You must enter the item's price", "", "warning");
    } else {
      const newItem = { name: name, price: price };
      addItem(newItem);
      setName("");
      setPrice("");
    }
  };
  return (
    <div className="d-flex justify-content-between align-items-center">
      <input
        type="text"
        name="item"
        className="form-control"
        placeholder="Item name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        name="price"
        className="form-control ms-3"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button className="btn btn-sm btn-success ms-3" onClick={validateInputs}>
        Submit
      </button>
    </div>
  );
}

export default AddForm;
