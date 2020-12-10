// Create function for component
function List(props) {
    // Map over fruits and list each item
    const fruitItems = props.fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>
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

// Export component
export default List