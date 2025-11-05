import education from "../../../assets/images/education.svg";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={education} alt="education" style={{width:"90%"}}/>
        </div>
        <div className="col-6">
          <h1 className='mb-5 fs-2'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" style={{textDecoration:"none"}}>Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"/></a>

          <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"/></a>
        </div>
        
      </div>
    </div>
  )
}

export default Education
