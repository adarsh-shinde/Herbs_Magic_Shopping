import './Trending.css'
import {Link} from 'react-router-dom'
const Trending = () => {
  return (
    <div className='trending'>
        <div className="trending-header">
            <div className="trending-now-text">Trending Now</div>
            <div className="view-all-text"><Link to={'/items'}>View All</Link></div>
        </div>
    </div>
  )
}

export default Trending