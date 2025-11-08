import Hero from './components/Hero'
import LeftSection from './components/leftSection'
import RightSection from './components/rightSection';
import Universe from './components/Universe'
import kite from "../../assets/images/kite.png";
import coin from "../../assets/images/coin.png";
import varsity from "../../assets/images/varsity.png";
import console from "../../assets/images/console.png";
import kiteconnect from "../../assets/images/kiteconnect.png";
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <Hero/>
      <LeftSection imageUrl={kite} productName="Kite" productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlay="#" appStore="#"/>

      <RightSection imageUrl={console} productName="Console" productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="#"/>

      <LeftSection imageUrl={coin} productName="Coin" productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." coin="#" googlePlay="#" appStore="#"/>

      <RightSection imageUrl={kiteconnect} productName="Kite Connect API" productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." kiteConnect="#"/>
              
      <LeftSection imageUrl={varsity} productName="Varsity mobile" productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." googlePlay="#" appStore="#"/>

      <div className="container p-5 mb-5 text-center">
        <div className="row">
          <h2 className="fs-4 text-muted">Want to know more about our technology stack? Check out the <Link to="#" className="textD-none-link">Zerodha.tech</Link> blog.</h2>
        </div>
      </div>
      
      
      <Universe/>
    </> 
  )
}

export default Products
