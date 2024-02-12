import { meetourTeam } from "../../data/data"
const Meetourteam = () => {
  return (
    <div className='meet-our-team'>
        <h2>MEET OUR TEAM</h2>
        <div className="team-para">
            <p>Its all about people</p>
            <p>From planning and strategy,to technology and marketing the, individual that make up XYZ company share a passion for financial success which influences everything we do. We prefer insourcing to outsourcing. so you have a team that understands your needs and is passionate about your success. The Result is consisitently great work and phenomal results that you are proud of.</p>
        </div>
        <div className="profile-cont">
            {meetourTeam.map((meet) => (
                <div key={meet.id} className="profile">
                    <img src={meet.Profile} alt="" />
                    <h3>{meet.protitle}</h3>
                    <p>{meet.tel1}</p>
                    <p>{meet.tel2}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Meetourteam