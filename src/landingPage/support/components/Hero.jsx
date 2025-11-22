import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row  mb-5" id="supportWrapper">
        <h3 className="">Support</h3>
        <Link to="#" className="fs-5">My Ticket</Link>
      </div>
    </section>
  )
}

export default Hero
