import { whoweare } from "../../data/data"
const WhoWeAre = () => {
  return (
    <div className="who-we-are">
        {whoweare.map((who) => (
      <div key={who.id} className="right">
        <h3>{who.title}</h3>
        <p>{who.p1}</p>
        <p>{who.p2}</p>
        <p>{who.p3}</p>
        <img src={who.fintechimg} alt="" />
      </div>
      
     ))}
<div className="left">
  {whoweare.map((who) =>(
    <div key={who.id}>
      <p>{who.redtext}</p>
    </div>
  ) )}
</div>
   
    </div>
  )
}

export default WhoWeAre