import { Link } from 'react-router-dom'
import { ArrowIcon } from '../../../utils/Icons'

const Hero = () => {
  return (
    <div className="container p-5 mb-5 border-bottom">
      <div className="row text-center">
        <h1 className="mt-5 fs-3">Zerodha Products</h1>
        <h3 className="fs-4 text-muted">Sleek, modern, and intuitive trading platforms</h3>
        <p className="text-muted mt-2">Check out our <Link to="#" className="textD-none-link">investment offerings</Link> <ArrowIcon/></p>
      </div>
    </div>
  )
}

export default Hero
