import { useState } from 'react';
import './App.css';
import Expenses from './Expenses';

function App() {

  //state object that stores the id and category of the expense to be edited

  const [editObj, setEditObj] = useState({
    editID: '',
    editName: ''
  });

  //state variable to store and set the income entered by the user

  const [income, setIncome] = useState(0);

  //state objects for each respective category expenses and their costs

  const [grocery, setGrocery] = useState([{
    name: "",
    cost: 0,
  }]);

  const [veggies, setVeggies] = useState([{
    name: "",
    cost: 0
  }]);
  const [travelling, setTravelling] = useState([{
    name: "",
    cost: 0
  }]);
  const [miscalleneous, setMiscalleneous] = useState([{
    name: "",
    cost: 0
  }]);

  //handler function to handle the income entered by user

  var incomeHandler = () => {
    var tempIncome = document.getElementById("incomeInput").value;

    setIncome(tempIncome);
  }


  //adds the expense entered by the user under their respective categories

  var addExpense = () => {
    var category = document.getElementById("categorySelect").value;
    if (document.getElementById("addExpenseID").value !== '') {

      if (category === 'grocery') {
        setGrocery(prevArray => [...prevArray, {
          name: document.getElementById("addExpenseID").value,
          cost: document.getElementById("expenseCost").value
        }]);
      }
      else if (category === 'veggies') {
        setVeggies(prevArray => [...prevArray, {
          name: document.getElementById("addExpenseID").value,
          cost: document.getElementById("expenseCost").value
        }]);
      }
      else if (category === 'travelling') {
        setTravelling(prevArray => [...prevArray, {
          name: document.getElementById("addExpenseID").value,
          cost: document.getElementById("expenseCost").value
        }]);
      }
      else {
        setMiscalleneous(prevArray => [...prevArray, {
          name: document.getElementById("addExpenseID").value,
          cost: document.getElementById("expenseCost").value
        }]);
      }

    }
  }


  // opens a modal where the user can fill the fields and edit the expense

  var editExpense = (event) => {

    var id = event.currentTarget.id;
    var name = event.currentTarget.name;

    document.getElementById("editDiv").style.display = "block";
    document.getElementById("mainContainer").style.opacity = "75%";
    document.getElementById("editDiv").style.animation = "openAnimation 1s forwards";

    setEditObj(prevState => ({
      ...prevState, editID: id,
      editName: name
    }));

  }

  // saves the details entered by the user and edits the expense by modifying its state object 

  var saveEdit = (event) => {
    if (editObj.editName === 'grocery') {
      var tempArray = grocery;

      tempArray[event.currentTarget.id].name = document.getElementById("editName").value;

      tempArray[event.currentTarget.id].cost = document.getElementById("editCost").value;

      setGrocery([...tempArray]);
    }

    else if (editObj.editName === 'veggies') {
      var tempArray2 = veggies;

      tempArray2[event.currentTarget.id].name = document.getElementById("editName").value;

      tempArray2[event.currentTarget.id].cost = document.getElementById("editCost").value;

      setVeggies([...tempArray2]);
    }

    else if (editObj.editName === 'travelling') {
      var tempArray3 = travelling;

      tempArray3[event.currentTarget.id].name = document.getElementById("editName").value;

      tempArray3[event.currentTarget.id].cost = document.getElementById("editCost").value;

      setTravelling([...tempArray3]);
    }

    else if (editObj.editName === 'miscalleneous') {
      var tempArray4 = miscalleneous;

      tempArray4[event.currentTarget.id].name = document.getElementById("editName").value;

      tempArray4[event.currentTarget.id].cost = document.getElementById("editCost").value;

      setMiscalleneous([...tempArray4]);
    }


    document.getElementById("editDiv").style.display = "none";
    document.getElementById("mainContainer").style.opacity = "100%";
  }


  // closes the edit modal 

  var closeEditDiv = (event) => {
    document.getElementById("editDiv").style.display = "none";
    document.getElementById("mainContainer").style.opacity = "100%";
  }


  //deletes the expense by checking it's category and filtering it based on it's id

  var deleteExpense = (event) => {
    var deleteID = event.currentTarget.id;

    if (event.currentTarget.name === 'grocery') {
      var tempArray2 = grocery.filter((item, index) => (index != deleteID));
      console.log(tempArray2);
      setGrocery([...tempArray2]);
    }

    else if (event.currentTarget.name === 'veggies') {
      var tempArray3 = veggies.filter((item, index) => (index != deleteID));
      console.log(tempArray3);
      setVeggies([...tempArray3]);
    }

    else if (event.currentTarget.name === 'travelling') {
      var tempArray4 = travelling.filter((item, index) => (index != deleteID));
      console.log(tempArray4);
      setTravelling([...tempArray4]);
    }

    else if (event.currentTarget.name === 'miscalleneous') {
      var tempArray5 = miscalleneous.filter((item, index) => (index != deleteID));
      console.log(tempArray5);
      setMiscalleneous([...tempArray5]);
    }
  }

  return (
    <div className="App">

      <Expenses incomeHandler={incomeHandler} income={income} addExpense={addExpense} grocery={grocery} editExpense={editExpense} editObj={editObj} saveEdit={saveEdit} closeEditDiv={closeEditDiv} deleteExpense={deleteExpense} veggies={veggies} travelling={travelling} miscalleneous={miscalleneous} />

    </div>
  );
}

export default App;