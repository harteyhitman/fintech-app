import SmillingMan from '../../assets/images/smillingman.png'
import { whychooseUs } from '../../data/data'

const Whychooseus = () => {
  return (
    <div className='why-choose-us'>
        <div className="choose-right">
            <img src={SmillingMan} alt="" />
        </div>
        <div className="choose-left">
            <h2>WHY CHOOSE US ?</h2>
            <p>A trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get helpA trust is a way of managing assets [money,investments ,land or buildings] for people -types of trust how they are taxed where to get help </p>
            <div className="board">
                {whychooseUs.map((choose) => (
                    <div key={choose.id} className="board-indoor">
                        <div className="top-text">
                            <img src={choose.redCircle} alt="" />
                            <h3>{choose.h2}</h3>
                        </div>
                        <p>{choose.p}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Whychooseus