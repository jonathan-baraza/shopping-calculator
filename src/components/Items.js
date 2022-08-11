import { useState, useEffect, useRef } from "react";
import "../App.css";
import Item from "./Item";
import AddForm from "./AddForm";

function Items({ allItems, updateAllItems, viewForm, setViewForm }) {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    if (isScrolling) {
      scrollToBottom();
      setIsScrolling(false);
    }
  }, [allItems]);

  const scrollToBottom = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const updateCompletionStatus = (itemIndex) => {
    const { name, price, completed } = allItems[itemIndex];
    const myNewItem = { name: name, price: price, completed: !completed };
    updateAllItems(
      allItems.map((item) => {
        if (item.name === myNewItem.name && item.price === myNewItem.price) {
          return myNewItem;
        } else {
          return item;
        }
      })
    );
  };

  const addItem = (newItem) => {
    updateAllItems([...allItems, newItem]);
    setIsScrolling(true);
  };

  const deleteItem = (itemIndex) => {
    const myItem = allItems[itemIndex];
    updateAllItems(allItems.filter((item) => item !== myItem));
  };

  return (
    <>
      <div id="itemsBody">
        {allItems.length > 0 ? (
          allItems.map((item, index) => (
            <Item
              key={item.name}
              index={index}
              item={item}
              updateStatus={updateCompletionStatus}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <div className="p-4 w-100 d-flex flex-column align-items-center">
            <div className="alert alert-warning mx-auto text-center m-3 w-auto">
              You don't have any items in your cart. <br />
              Click on the 'plus' button to add some items.
            </div>
            {!viewForm && (
              <button
                className="btn btn-sm btn-primary mx-auto"
                onClick={() => {
                  setViewForm(true);
                }}
              >
                Add Item
              </button>
            )}
          </div>
        )}
        <div ref={scrollRef}></div>
      </div>
      <div className="card-card-footer bg-light p-3 border-top">
        {viewForm && <AddForm addItem={addItem} />}
      </div>
    </>
  );
}

export default Items;
