import Inputs from '../../components/inputs'

const Reachtous = () => {
    return (
        <div className='reach-to-us'>
            <div className="reach-right">
                <h2>REACH OUT TO US</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Ligula ac orci ut ac cursus pulvinar. Eget at mauris tempor tempor mollis nisl. Viverra at sed nibh ullamcorper lobortis cras velit nunc lectus. Aenean ornare i</p>
            </div>
            <div className="reach-left">
                <select className='select' name="nothing" id=""><option value="">nothing selected</option></select>
                <div className="inputs">
                    <Inputs label='First name' type="text" />
                    <Inputs label='Last name' type="text" />
                    <Inputs label='Email' type="password" />
                    <Inputs label='Phone number' type="number" />
                </div>

            </div>
        </div>
    )
}

export default Reachtous