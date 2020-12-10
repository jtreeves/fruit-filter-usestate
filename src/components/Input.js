// Create function for component
function Input(props) {
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
                value={props.value}
                // Get onChange function from FruitContainer
                onChange={props.onChange}
            />
        </div>
    )
}

// Export component
export default Input