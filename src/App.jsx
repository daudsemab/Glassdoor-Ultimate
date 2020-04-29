import React, { Component } from 'react'

import './App.css'
import Loading from './components/Loading/Loading'
import Header from './components/Header/Header'
import Illustration from './components/Illustration/Illustration'
import Filter from './components/Filter/Filter'
import Cardlist from './components/Cardlist/Cardlist'
import Footer from './components/Footer/Footer'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            peoples: [],
            filterField: []
        }
    }

randomNum = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

componentDidMount = () => {
       fetch('https://randomuser.me/api/?results=40')
       .then(resp => resp.json())
       .then(data => {
           data.results.map(user => {
               let randomXp = this.randomNum(1,7);
               let randomAge = this.randomNum(25,40);
               user.randomXp = randomXp;
               return user.randomAge = randomAge;
           })
           this.setState({peoples: data.results})
       })
}

arrayRemove = (arr, itemsToRemove) => {
    return arr.filter(item => {
       return !itemsToRemove.includes(item)
    });
 }

rmv_item_updateFfield = (itemsToRemove) => {
    let filtered = this.arrayRemove(this.state.filterField, itemsToRemove);
    this.setState({filterField: filtered})
}

setFilterField = (event, itemsToRemove) => {
    this.state.filterField.unshift(event.target.value)
    this.rmv_item_updateFfield(itemsToRemove)

}

onXpSelected1 = (event) => {
    this.setFilterField(event, ["3 years or below", 'all'])
}

onXpSelected2 = (event) => {
    this.setFilterField(event, ["above 3 years", 'all'])
}

onAllXp = (event) => {
    this.setFilterField(event, ["above 3 years", '3 years or below'])
}

onCheckedMale = (event) => {
    this.setFilterField(event, ['female','Both'])
}

onCheckedFemale = (event) => {
    this.setFilterField(event, ['male','Both'])
}

onCheckedBoth = (event) => {
    this.setFilterField(event, ['male','female'])
}

displayXpOrGen = (gen, xp, heading) => {
    return(
        <div className='App'>
        <Header />
        <Illustration />
        <Filter xpSelected1={this.onXpSelected1} xpSelected2={this.onXpSelected2} allXp={this.onAllXp} checkedMale={this.onCheckedMale} checkedFemale={this.onCheckedFemale} checkedBoth={this.onCheckedBoth} />
        <h3 className='filter-query-heading'>{heading}</h3>
        <Cardlist filteredGender={gen} data={xp} />
        <Footer />
        </div>
    );
}

displayAll = () => {
    return(
        <div className='App'>
        <Header />
        <Illustration />
        <Filter xpSelected1={this.onXpSelected1} xpSelected2={this.onXpSelected2} allXp={this.onAllXp} checkedMale={this.onCheckedMale} checkedFemale={this.onCheckedFemale} checkedBoth={this.onCheckedBoth} />
        <h3 className='filter-query-heading'>All Persons</h3>
        <Cardlist data={this.state.peoples} />
        <Footer />
        </div>
    );
}

    
    render() {
        const {peoples, filterField} = this.state;
        
        const filteredXpGreater = peoples.filter(person => {
            return person.randomXp > 3;
        })
        const filteredXpLess = peoples.filter(person => {
            return person.randomXp <= 3;
        })
        const filteredMale = peoples.filter(person => {
            return person.gender === 'male';
        })
        const filteredFemale = peoples.filter(person => {
            return person.gender === 'female';
        })
        const allGender = false;
        return (

            //*****************while fetching persons show loading******************/

            (!peoples.length) ? <Loading />

            //*****************3yrs+ and male******************/

            : (filterField.includes("above 3 years") && filterField.includes('male')) ?
            this.displayXpOrGen(filteredMale, filteredXpGreater, "Above Three Years Experience and Males only")

            // //*****************3yrs & below and male******************/

            : (filterField.includes("3 years or below") && filterField.includes('male')) ?
            this.displayXpOrGen(filteredMale, filteredXpLess, "Three Years Experience or Below and Males only")

            //******************  All Xp and male  ******************/

            : (filterField.includes("all") && filterField.includes('male')) ?
            this.displayXpOrGen(filteredMale, peoples, "Males only")

            //*****************3yrs+ and female******************/

            : (filterField.includes("above 3 years") && filterField.includes('female')) ?
            this.displayXpOrGen(filteredFemale, filteredXpGreater, "Above Three Years Experience and Females only")

            //*****************3yrs & below and female******************/

            : (filterField.includes("3 years or below") && filterField.includes('female')) ?
            this.displayXpOrGen(filteredFemale, filteredXpLess, "Three Years Experience or Below and Females only")

            // //******************  All Xp and female  ******************/

            : (filterField.includes("all") && filterField.includes('female')) ?
            this.displayXpOrGen(filteredFemale, peoples, "Females only")

            //*****************3yrs+ and both genders******************/

            : (filterField.includes("above 3 years") && filterField.includes('Both')) ?
            this.displayXpOrGen(allGender, filteredXpGreater, "Above Three Years Experience and Both Genders")

            //*****************3yrs & below and both genders******************/

            : (filterField.includes("3 years or below") && filterField.includes('Both')) ?
            this.displayXpOrGen(allGender, filteredXpLess, "Three Years Experience or Below and Both Genders")

            //******************  All Xp and both genders  ******************/

            : (filterField.includes("all") && filterField.includes('Both')) ?
            this.displayAll()

            //******************  Male only  ******************/

            : (filterField.includes("male")) ?
            this.displayXpOrGen(filteredMale, peoples, 'Males Only')

            //******************  Female only  ******************/

            : (filterField.includes("female")) ?
            this.displayXpOrGen(filteredFemale, peoples, 'Females Only')

            //******************  Male and Female Both (display all)  ******************/

            : (filterField.includes("Both")) ?
            this.displayAll()

            //*****************3yrs+ only******************/

            : (filterField.includes("above 3 years")) ? 
            <div className='App'>
            <Header />
            <Illustration />
            <Filter xpSelected1={this.onXpSelected1} xpSelected2={this.onXpSelected2} checkedMale={this.onCheckedMale} checkedFemale={this.onCheckedFemale} checkedBoth={this.onCheckedBoth} />
            <h3 className='filter-query-heading'>Above Three Years Experience</h3>
            <Cardlist data={filteredXpGreater} />
            <Footer />
            </div>

            //*****************3yrs & below only******************/

            : (filterField.includes("3 years or below")) ?
            <div className='App'>
            <Header />
            <Illustration />
            <Filter xpSelected1={this.onXpSelected1} xpSelected2={this.onXpSelected2} checkedMale={this.onCheckedMale} checkedFemale={this.onCheckedFemale} checkedBoth={this.onCheckedBoth} />
            <h3 className='filter-query-heading'>Three Years Experience or Below</h3>
            <Cardlist data={filteredXpLess} />
            <Footer />
            </div>

            //******************  All Xp only (display all)  ******************/

            : (filterField.includes("all")) ?
            this.displayAll()

            //******************  ELSE PART (display all) ******************/

            :
            this.displayAll()
        );
    }
}