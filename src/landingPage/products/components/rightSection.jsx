import { Link } from 'react-router-dom'
import { ArrowIcon } from '../../../utils/Icons';

const RightSection = ({
  imageUrl="", 
  productName="", 
  productDesc="", 
  kiteConnect="",
  learnMore="",
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
            <h1 className="fs-4">{productName}</h1>
            <p>{productDesc}</p>
            {(kiteConnect || learnMore) && (
              <div>
                 {learnMore && (
                  <Link to={learnMore} className="textD-none-link">Learn More <ArrowIcon/></Link>    
                )}
                 {kiteConnect && (
                  <Link to={kiteConnect} className="textD-none-link">Kite Connect <ArrowIcon/></Link>    
                )}
              </div>
            )}
        </div>
        <div className="col-7 p-5">
          <img src={imageUrl} alt={imageUrl}/>
        </div>
      </div>
    </div>
  )
}

export default RightSection
