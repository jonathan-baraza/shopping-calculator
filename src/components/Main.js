import "../App.css";
import Header from "./Header";
import Items from "./Items";
import { GrAddCircle } from "react-icons/gr";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useState, useEffect } from "react";

function Main() {
  const [viewForm, setViewForm] = useState(false);
  const [allItems, setAllItems] = useState([
    { name: "one", price: "50", completed: false },
    { name: "two", price: "30", completed: false },
    { name: "three", price: "10", completed: false },
  ]);

  const [itemsPrice, setItemsPrice] = useState(0);

  const updateAllItems = (newItems) => {
    setAllItems(newItems);
  };

  const updateItemsPrice = () => {
    let totalPrice = 0;
    allItems.map((item) => {
      totalPrice += Number(item.price);
    });

    setItemsPrice(totalPrice);
  };

  useEffect(() => {
    updateItemsPrice();
  }, [allItems]);

  return (
    <div id="body" className="w-100 d-flex justify-content-center">
      <div className="row d-flex justify-content-center w-100">
        <Header className="col-sm-12 mx-auto" itemsPrice={itemsPrice} />

        <div className="col-md-5 mx-auto p-1 mt-4">
          <div className="card p-0">
            <div className="card-header d-flex justify-content-between align-items-center bg-light p-3">
              <h5>Total items #({allItems.length})</h5>
              {!viewForm ? (
                <GrAddCircle
                  size={"25px"}
                  style={{ cursor: "pointer" }}
                  className="react-icon"
                  onClick={() => {
                    setViewForm(!viewForm);
                  }}
                />
              ) : (
                <MdRemoveCircleOutline
                  size={"28px"}
                  style={{ cursor: "pointer" }}
                  className="react-icon"
                  onClick={() => {
                    setViewForm(!viewForm);
                  }}
                />
              )}
            </div>
            <div className="card-body p-0">
              <Items
                allItems={allItems}
                updateAllItems={updateAllItems}
                viewForm={viewForm}
                setViewForm={setViewForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
