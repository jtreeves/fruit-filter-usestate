// Import React's Component
import React, { Component } from 'react'

// Create class for component
class Input extends Component {
    // Render page
    render() {
        // Return this info to the page
        return(
            <div>
                {/* Display introductory text */}
                <label htmlFor='fruit-filter'>
                    Filter These Fruits: 
                </label>
                {/* Create input tag */}
                <input
                    // Set type as text
                    type='text'
                    // Link this tag to above tag
                    name='fruit-filter'
                    // Get value string from FruitContainer
                    value={this.props.value}
                    // Get onChange function from FruitContainer
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

// Export component
export default Input