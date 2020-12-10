// Import React's Component
import React, { Component } from 'react'

// Import other components
import Input from './Input'
import List from './List'

// Create class for component
class FruitContainer extends Component {
    // Create constructor
    constructor(props) {
        super()
        this.state = {
            // Initialize fruitsToDisplay array as array from props
            fruitsToDisplay: props.fruits,
            // Initialize filterValue string as empty string
            filterValue: ''
        }
    }

    // Create function for filtering
    handleFilterChange = (event) => {
        event.preventDefault()
        // Grab text inputed by user
        let filterValue = event.target.value
        // Remove the fruits that don't contain the filter value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })
        // Reset state
        this.setState({ fruitsToDisplay: filteredFruitList, filterValue })
    }
    
    // Render page
    render() {
        // Log the states and props, as they adjust based on different filter queries
        console.log('---- state ----')
        console.log(this.state.fruitsToDisplay)
        console.log('---- props ----')
        console.log(this.props.fruits)

        // Return this info to the page
        return(
            <div>
                <ul>
                    {/* Send info to Input to use as props */}
                    <Input
                        // Send above filterValue string as value
                        value={this.state.filterValue}
                        // Send above handleFilterChange function as onChange
                        onChange ={this.handleFilterChange}
                    />
                    {/* Send info to List to use as props */}
                    <List
                        // Send above fruitsToDisplay array as fruits
                        fruits={this.state.fruitsToDisplay}
                    />
                </ul>
            </div>
        )
    }
}

// Export component
export default FruitContainer