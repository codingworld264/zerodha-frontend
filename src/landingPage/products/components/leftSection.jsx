import { Link } from 'react-router-dom'
import googlePlayBadge from "../../../assets/images/googlePlayBadge.svg";
import appstoreBadge from "../../../assets/images/appstoreBadge.svg";
import { ArrowIcon } from '../../../utils/Icons';

const LeftSection = ({
  imageUrl="", 
  productName="", 
  productDesc="", 
  tryDemo="", 
  learnMore="",
  coin="", 
  googlePlay="", 
  appStore=""
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 p-5">
          <img src={imageUrl} alt={imageUrl}/>
        </div>
        <div className="col-5 p-5 mt-5">
            <h1 className="fs-4">{productName}</h1>
            <p>{productDesc}</p>
            {(tryDemo || learnMore || coin) && (
              <div>
                {tryDemo && (
                  <Link to={tryDemo} className="textD-none-link">Try Demo <ArrowIcon/></Link>
                )}

                {learnMore && (
                  <Link to={learnMore} className="textD-none-link" style={{marginLeft:"50px"}}>Learn More <ArrowIcon/></Link>
                )}

                {coin && (
                  <Link to={coin} className="textD-none-link">Coin <ArrowIcon/></Link>    
                )}
                
              </div>
            )}
            <div className="mt-3">
              <Link to={googlePlay}><img src={googlePlayBadge} alt={"google-play"}/></Link>
              <Link to={appStore}><img src={appstoreBadge} alt={"app-store"} style={{marginLeft:"50px"}}/></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
