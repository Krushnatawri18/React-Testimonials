import './App.css';
import Testimonial from './components/Testimonial';
import { reviews } from './data';

function App() {
    return (
        <div className="App">
            <div className='text'>
                <h1>Our Testimonials</h1>
            </div>
            <div className='border'></div>
            <Testimonial reviews={reviews} />
        </div>
    );
}

export default App;
