import { aboutUs } from "../../data/data"
import { service } from "../../data/data"
import { recentNews } from "../../data/data"


const Footer = () => {
  return (
    <div className='footer-cont'>
        <div className="about-us">
            {aboutUs.map((about) => (
            <div key={about.abouth2} className="about">
                <h2>ABOUT US</h2>
                <img src={about.spiral} alt="" />
                <h2>{about.abouth2}</h2>
                <p>{about.aboutpara}</p>
            </div>
        ))}</div>
        <div className="service-cont">
            {service.map((serve) => (
                <div key={serve.id} className="service">
                    <h2>{serve.head}</h2>
                    <div className="arrow">
                        <img src={serve.arrow} alt="" />
                        <h3>{serve.textabout}</h3>
                    </div>
                </div>
            ))}
        </div>
        <div className="recent-news">
            {recentNews.map((recent) => (
                <div key={recent.id} className="rec">
                    <h2>{recent.recenthead}</h2>
                    <p>{recent.recentpara}</p>
                    <div className="read-more">
                        <h3>{recent.readmore}</h3>
                        <img src={recent.recentarrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer