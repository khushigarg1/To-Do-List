import React from "react";
import { useState } from "react";
import todo from "../images/images.jpeg";
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const additem = () => {
        //we want our state as a array thats why we have to write inputData in an array but here soem problem is previous data cannot be store o we will use ...(spread operator)
        // setItems([inputData])
        if (!inputData) {
            alert("cannot add empty data");
        }
        else {
            setItems([...items, inputData]);
            setInputData('');
        }
        // if there is an empty data thenw e cannot add if somethign is written in input box only when we can aad in our todo list
    }

    //delete the items on clicking delete button
    const deleteitem = (id) => {
        const updateditems = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updateditems);
    }

    const removeall = () => {
        setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        {/* <img alt="todologo" /> */}
                        <figcaption>Add Your List Here ✍️</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items...." value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {/* if we write only value then we cannot change our input data so we have to use some event fxn and we use onChange fxn here  */}
                        <i className="fa fa-solid fa-plus add-btn" title="Add Item" onClick={additem}></i>
                    </div>

                    <div className="showItems">
                        {/* we have to map here to access all our data which si adding by clciking plus button */}
                        {
                            items.map((elem, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                        <i className="fa fa-solid fa-trash add-btns" title="Delete Item" onClick={() => deleteitem(index)}></i>
                                        <h3>{elem}</h3>
                                    </div>
                                    // we have to use arrow fucntion in to deleteitem and to apss id with this fxn if we dont do this then we will get automatically call this fxn every time while we are typing in input box
                                )
                            })
                        }

                    </div>

                    <div className="showItem">
                        <button className="btn hovereffects" data-sm-link-text="Remove all" onClick={removeall}> <span>CHECK LIST</span></button>
                        {/* <button className="btn effects" data-sm-link-text="Remove all"> <span>CHECK LIST</span></button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todo;    