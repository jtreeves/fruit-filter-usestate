// Import React's Component
import React, { Component } from 'react'

// Create class for component
class List extends Component {
    // Render page
    render() {
        // Map over fruits and list each item
        const fruitItems = this.props.fruits.map((fruit, index) => {
            return <li>{fruit}</li>
        })

        // Return this info to the page
        return(
            <div>
                <ul>
                    {/* Display mapped array created above */}
                    {fruitItems}
                </ul>
            </div>
        )
    }
}

// Export component
export default List