// Import React's CSS
import './App.css'

// Import main component
import FruitContainer from './components/FruitContainer'

// Create function for app
function App() {
    // Create array of fruits
    const fruits = ['banana', 'watermelon', 'apple', 'orange', 'kiwi', 'crabapple', 'grape', 'grapefruit', 'mango', 'starfruit']

    // Return this info to the page
    return (
        // Use 'App-header' styling
        <div className='App-header'>
            {/* Display title */}
            <h1>Fruit Filter</h1>
            {/* Send info to FruitContainer to use as props */}
            <FruitContainer
                // Send above fruits array as fruits
                fruits={fruits}
            />
        </div>
    )
}

// Export app
export default App