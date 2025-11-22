import smallcaseLogo from "../../../assets/images/smallcaseLogo.png";
import streakLogo from "../../../assets/images/streakLogo.png";
import zerodhaFundhouse from "../../../assets/images/zerodhaFundhouse.png";
import sensibullLogo from "../../../assets/images/sensibullLogo.svg";
import dittoLogo from "../../../assets/images/dittoLogo.png";
import tijori from "../../../assets/images/tijori.svg";

const Universe = () => {

  const universe = [
    [{
      image:zerodhaFundhouse,
      description:`Our asset management venture <br/> that is creating simple and transparent index <br/> funds to help you save for your goals.`
    },
    {
      image:sensibullLogo,
      description:`Options trading platform that lets you <br/> create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.`
    },
     {
      image:tijori,
      description:`Investment research platform <br/>that offers detailed insights on stocks, <br/> sectors, supply chains, and more.`
    }],
    [{
      image:streakLogo,
      description:`Systematic trading platform <br/>that allows you to create and backtest <br/> strategies without coding.`
    },
    {
      image:smallcaseLogo,
      description:`Thematic investing platform  <br/> that helps you invest in diversified <br/>baskets of stocks on ETFs.`
    },
    {
      image:dittoLogo,
      description:`Personalized advice on life  <br/> and health insurance. No spam  <br/>and no mis-selling.`
    }]
  ]

  const ImageCard = ({imageUrl, description}) => {
    return (
      <div className="col-4 mt-5 p-3">
        {description && (
          <>
            <img src={imageUrl} alt="" style={{width:"160px", height:"52px"}}/>
            <p className="text-small text-muted mt-2" dangerouslySetInnerHTML={{ __html: description }} />
          </>
        )}
      </div>
    );
  }
  return (
    <div className="container p-5 mb-5">
          <div className="row text-center">
              <h1 className="mt-5 fs-3">The Zerodha Universe</h1>
              <p className="text-muted mt-2">Extend your trading and investment experience even further with our partner platforms</p>
          </div>
          <div className="row text-center">
            {universe?.length ? universe.map((u, i) => {
              return (
                  <div className="row" key={`upper_${i}`}>
                    {u?.length ? u.map((d, j) => {
                      return <ImageCard imageUrl={d?.image} description={d?.description} key={`inner_${j}`}/>
                    }):""}
                  </div>
              )
          }):""} 
          </div>
          <div className="row">
              <button className="p-2 btn btn-primary fs-5 mt-5" style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
          </div>
        </div>
  )
}

export default Universe
