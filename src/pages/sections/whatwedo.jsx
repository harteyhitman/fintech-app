import { mainThree } from "../../data/data"


const Whatwedo = () => {
    return (
        <div className="what-we-do">
            <h2>WHAT WE DO</h2>
            <p>FTA IS DEDICATED TO SEEING YOU CHOOSE THE RIGHT TECHNOLOGY STRATEGY ENSURING YOU MAINTAIN A COMPETITIVE EDGE OVER YOUR PEERS</p>
            <div className="main-three-container">
                   {mainThree.map((main) => (
                <div key={main.id} className="main-three">
                    <img src={main.img} alt="" />
                    <div className="split">
                        <img src={main.red} alt="" />
                        <h3>{main.h2}</h3>
                    </div>
                    <p>{main.text}</p>
                </div>
            ))}
            </div>
         
        </div>
    )
}

export default Whatwedo