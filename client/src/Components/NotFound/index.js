import {Link} from 'react-router-dom';
import './index.css';

const NotFound = () => (
        <div className="not-found-container">
        <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
            alt="not found"
            className="not-found-img"
            />
        <h4>Page NotFound</h4>
        <Link to="/"><button type='button' className='btn text-primary'>Back to Home</button></Link>
    </div>
)

export default NotFound