import largestBroker from "../../../assets/images/largestBroker.svg";
import pressLogos from "../../../assets/images/pressLogos.png";

const Awards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={largestBroker}/>
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>Largest stock broker in India</h1>
            <p className="mb-5">2+ million Zerodha Client contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

            <div className="row">
              <div className="col-6">
                <ul>

                  <li>
                    <p>Futures and Options</p>
                  </li>
                  
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  
                  <li>
                      <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                 <ul>
                   <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Government Securities </p>
                  </li>
                 </ul>
              </div>
            </div>
            
            <img src={pressLogos} style={{width:"90%"}} alt="pressLogos"/>
        </div>
      </div>
    </div>
  )
}

export default Awards
