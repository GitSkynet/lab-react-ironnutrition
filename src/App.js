import React, {Component} from 'react';
import './App.css';
import FoodBox from './FoodBox';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import NewFoods from './NewFoods';
import Search from './Search';

class App extends Component {
  state = {
    foods,
    isAddForm: false,
    inputValue: '',
  }

  newFood = addFood => {
    const foodCopy = [...this.state.foods]
    foodCopy.push(addFood)
    console.log('FOOD COPY CONSOLE LOOOOG', foodCopy)
    this.setState({
      foods : foodCopy,
      isAddForm : false
    })
  }

  showForm = () =>{
    this.setState({
      isAddForm: !this.state.isAddForm
    })
  }

  filterSearch = (value) => {
    const copyFood = [...this.state.foods]
    let filtrado = copyFood.filter(data=>{
      return data.name.includes(value)
    })
    this.setState({
      foods: filtrado
    })
    console.log('FILTRADO!!!!', filtrado)
  }


  render() {
    return (
      <div className="App">
        <Search foodToColect={(e)=> this.filterSearch(e)}/>
        {this.state.isAddForm ? <NewFoods addFood={this.newFood}/> : <button onClick={() => this.showForm()}>Añadir comida</button>}
        {this.state.foods.map((oneFood, index)=> {
          return <FoodBox key={index} image={oneFood.image} name={oneFood.name} quantity={oneFood.quantity} calories={oneFood.calories} />
        })}
        
      </div>
    );
  }
}


export default App;
