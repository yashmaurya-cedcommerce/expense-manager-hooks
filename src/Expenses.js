import React, { useState, Component, useEffect } from 'react';


export default function Expenses(props) {

    var groceryTotal = 0;
    var veggiesTotal = 0;
    var travellingTotal = 0;
    var miscalleneousTotal = 0;


    return (
        <div className='container p-3'>

            <div className='containerHeader'>

                <h3 className='p-3'><i class="fa-solid fa-hand-holding-dollar mainHeading"></i>Manage My Expenses</h3>

                {/* input field where the income will be entered  */}

                <div className='incomeInputDiv py-3 mb-3'>

                    <input type="number" className='m-2' id="incomeInput" placeholder='Enter Income' />

                    <button className='btn btn-dark fw-bold' id='addIncomeBtn' onClick={() => props.incomeHandler()}>Add</button>

                </div>

                {/* dropdown that helps the user to select the category under which expense is to be added  */}

                <div className='expenseInputDiv py-3'>

                    <select id="categorySelect">

                        <option value="grocery">Grocery</option>

                        <option value="veggies">Veggies</option>

                        <option value="travelling">Travelling</option>

                        <option value="miscalleneous">Miscalleneous</option>

                    </select>

                    {/* input fields to add a new expense  */}

                    <input type="text" className='m-2' id="addExpenseID" placeholder='Expense Name' />

                    <input type="number" className='m-2' id='expenseCost' placeholder='Expense Cost' />

                    <button className='btn btn-dark fw-bold' id="addExpenseBtn" onClick={() => props.addExpense()}>Add</button>

                </div>

            </div>

            {/* main container that is given a flex property  */}

            <div className='mainContainer' id="mainContainer">

                <div className='expensesDiv'>

                    <div className='groceriesDiv'>

                        <h3 className='my-0 pb-2 pt-1'>Groceries</h3>

                        <table className='expensetable mt-0'>

                            {/* table header  */}

                            <tr>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Cost
                                </th>

                                <th>
                                    Edit
                                </th>

                                <th>
                                    Delete
                                </th>

                            </tr>

                            {/* displaying the grocery expense list  */}

                            {props.grocery.map((item, index) => {
                                groceryTotal = groceryTotal + parseInt(item.cost);

                                // console.log(options.data[0].dataPoints);

                                while (item.name !== '') {
                                    return (
                                        <tr className='expenseRow'>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="grocery" id={index} onClick={(event) => props.editExpense(event)}>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="grocery" id={index} onClick={(event) => props.deleteExpense(event)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                            }
                            {/* {options.data[0].dataPoints[0].y = groceryTotal} */}


                        </table>

                        {/* div that displays the total expenses category wise */}

                        <div className='totalDiv'>

                            <span>Total Spent: </span>

                            <input type="groceryDisplay" readOnly value={groceryTotal} />

                            {/* {setOptions()} */}

                        </div>

                    </div>





                    <div className='veggiesDiv my-5'>

                        <h3 className='my-0 pb-2 pt-1'>Veggies</h3>

                        <table className='expensetable mt-0'>

                            {/* table header  */}

                            <tr>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Cost
                                </th>

                                <th>
                                    Edit
                                </th>

                                <th>
                                    Delete
                                </th>

                            </tr>

                            {/* displaying the veggies expense list  */}

                            {props.veggies.map((item, index) => {
                                veggiesTotal = veggiesTotal + parseInt(item.cost);


                                while (item.name !== '') {
                                    return (
                                        <tr className='expenseRow'>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="veggies" id={index} onClick={(event) => props.editExpense(event)}>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="veggies" id={index} onClick={(event) => props.deleteExpense(event)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                            }

                        </table>

                        {/* div that displays the total expenses category wise */}

                        <div className='totalDiv'>

                            <span>Total Spent: </span>

                            <input type="veggiesDisplay" readOnly value={veggiesTotal} />
                            {/* {options.data[0].dataPoints[1].y = veggiesTotal} */}

                        </div>

                    </div>



                    <div className='travellingDiv my-5'>

                        <h3 className='my-0 pb-2 pt-1'>Travelling</h3>

                        <table className='expensetable mt-0'>

                            {/* table header  */}

                            <tr>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Cost
                                </th>

                                <th>
                                    Edit
                                </th>

                                <th>
                                    Delete
                                </th>

                            </tr>

                            {/* displaying the travelling expense list  */}

                            {props.travelling.map((item, index) => {
                                travellingTotal = travellingTotal + parseInt(item.cost);



                                while (item.name !== '') {
                                    return (
                                        <tr className='expenseRow'>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="travelling" id={index} onClick={(event) => props.editExpense(event)}>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="travelling" id={index} onClick={(event) => props.deleteExpense(event)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                            }

                        </table>

                        {/* div that displays the total expenses category wise */}

                        <div className='totalDiv'>

                            <span>Total Spent: </span>

                            <input type="travellingDisplay" readOnly value={travellingTotal} />

                            {/* {options.data[0].dataPoints[2].y = travellingTotal} */}

                        </div>

                    </div>





                    <div className='miscDiv my-5'>

                        <h3 className='my-0 pb-2 pt-1'>Miscalleneous</h3>

                        <table className='expensetable mt-0'>

                            {/* table header  */}

                            <tr>

                                <th>
                                    Name
                                </th>

                                <th>
                                    Cost
                                </th>

                                <th>
                                    Edit
                                </th>

                                <th>
                                    Delete
                                </th>

                            </tr>

                            {/* displaying the miscalleneous expense list  */}

                            {props.miscalleneous.map((item, index) => {
                                miscalleneousTotal = miscalleneousTotal + parseInt(item.cost);



                                while (item.name !== '') {
                                    return (
                                        <tr className='expenseRow'>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="miscalleneous" id={index} onClick={(event) => props.editExpense(event)}>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary expenseBtn my-2' name="miscalleneous" id={index} onClick={(event) => props.deleteExpense(event)}>
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                            }

                        </table>

                        {/* div that displays the total expenses category wise */}

                        <div className='totalDiv py-3'>

                            <span>Total Spent: </span>

                            <input type="miscalleneousDisplay" readOnly value={miscalleneousTotal} />

                            {/* {options.data[0].dataPoints[3].y = miscalleneousTotal} */}

                        </div>

                    </div>







                </div>

                <div className='balanceDisplay'>

                    <h3 className='py-2'>Analytics</h3>

                    <table>

                        <tr>

                            <td>Total Income </td>

                            <td><input type="number" className='my-1' id="incomeDisplay" value={props.income} readOnly /></td>

                        </tr>

                        <tr>

                            <td>Overall Expenditure </td>

                            <td><input type="number" id="expenseDisplay" className='my-1' readOnly value={groceryTotal + veggiesTotal + travellingTotal + miscalleneousTotal} /> </td>

                        </tr>

                        <tr>

                            <td>Total Balance </td>

                            <td><input type="number" id="balanceDisplay" className='my-1' readOnly value={props.income - (groceryTotal + veggiesTotal + travellingTotal + miscalleneousTotal)} /> </td>

                        </tr>

                    </table>

                </div>

            </div>


            <div className='editDiv' id="editDiv">

                <h5>Edit Your Expense Here</h5>

                <table>

                    <tr>

                        <td><label for="editName">Name</label></td>

                        <td><input type="text" id="editName" className='my-2' /></td>

                    </tr>

                    <tr>

                        <td><label for="editCost">Cost</label></td>

                        <td><input type="number" id="editCost" className='my-2' /></td>

                    </tr>

                    <tr>

                        <td></td>

                        <td className='editActionBtn'>

                            <button className='btn btn-primary mx-2' id={props.editObj.editID} onClick={(event) => props.saveEdit(event)} name={props.editObj.editName}>Save</button>

                            <button className='btn btn-primary' id="closeEditDiv" onClick={(event) => props.closeEditDiv(event)}>Close</button>

                        </td>


                    </tr>

                </table>
            </div>

        </div>
    )
}