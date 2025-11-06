import { Link } from "react-router-dom";
import nithinKamath from "../../../assets/images/nithinKamath.jpg";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="text-center fs-4">People</h1>
      </div>
      <div className="row p-5 text-muted">
        <div className="col-6 text-center">
          <img src={nithinKamath} alt="ceo-image" className="ceo-image"/>
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
              Playing basketball is his zen.
            </p>
            <p>
              Connect on <Link to="#" className="textD-none-link">Homepage</Link> / <Link to="#" className="textD-none-link">TradingQnA</Link> / <Link to="#" className="textD-none-link">Twitter</Link>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Team
