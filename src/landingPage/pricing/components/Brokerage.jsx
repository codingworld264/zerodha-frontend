import intradayTrades from "../../../assets/images/intradayTrades.svg";
import pricing0 from "../../../assets/images/pricing0.svg";
import pricingEquity from "../../../assets/images/pricingEquity.svg";
import ImageCard from "../../components/ImageCard";

const Brokerage = () => {

  const universe = [
    [{
      image:pricing0,
      title:"Free equity delivery",
      description:`All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.`
    },
    {
      image:intradayTrades,
      title:"Intraday and F&O trades",
      description:`Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.`
    },
     {
      image:pricingEquity,
      title:"Free direct MF",
      description:`All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.`
    }],
  ]

  return (
    <div className="container ps-5 mb-5">
         
          <div className="row text-center ps-5">
            {universe?.length ? universe.map((u, i) => {
              return (
                  <div className="row mt-5" key={`upper_${i}`}>
                    {u?.length ? u.map((d, j) => {
                      return <ImageCard imageUrl={d?.image} description={d?.description} title={d?.title} key={`inner_${j}`} imageSize={{width:"250px", height:"270px"}}/>
                    }):""}
                  </div>
              )
          }):""} 
          </div>
        </div>
  )
}

export default Brokerage