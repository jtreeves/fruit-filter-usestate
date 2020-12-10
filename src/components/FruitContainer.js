// Import useState
import React, { useState } from 'react'

// Import other components
import Input from './Input'
import List from './List'

// Create function for component
function FruitContainer(props) {
    // SET UP HOOKS (in lieu of a state object in the constructor)
    // Use state for fruits array from props by creating fruitsToDisplay variable and setFruitsToDisplay function to set that variable's value
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)
    // Use state for an empty string by creating filterValue variable and setFilterValue function to set that variable's value
    const [filterValue, setFilterValue] = useState('')

    // Create function for filtering
    const handleFilterChange = (event) => {
        event.preventDefault()
        // Grab text inputed by user
        const filteredValue = event.target.value
        // Remove the fruits that don't contain the filter value
        const filteredFruitList = props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        // Reset states
        setFruitsToDisplay(filteredFruitList)
        setFilterValue(filteredValue)
    }
    
    // Log the states and props, as they adjust based on different filter queries
    // console.log('---- state ----')
    // console.log(this.state.fruitsToDisplay)
    // console.log('---- props ----')
    // console.log(this.props.fruits)

    // Return this info to the page
    return(
        <div>
            <ul>
                {/* Send info to Input to use as props */}
                <Input
                    // Send above filterValue string as value
                    value={filterValue}
                    // Send above handleFilterChange function as onChange
                    onChange ={handleFilterChange}
                />
                {/* Send info to List to use as props */}
                <List
                    // Send above fruitsToDisplay array as fruits
                    fruits={fruitsToDisplay}
                />
            </ul>
        </div>
    )
}

// Export component
export default FruitContainer