import './App.css'
import {useState} from "react";
import CounterButtons from './components/counterButtons/CounterButtons.jsx';
import FormButton from './components/formButtons/FormButton.jsx';

function App() {


    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);


    const SelectedFruitTypes =
        (strawberry > 0 ? 1 : 0) +
        (banana > 0 ? 1 : 0) +
        (apple > 0 ? 1 : 0) +
        (kiwi > 0 ? 1 : 0);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [dayAndEveningButton, setDayAndEveningButton] = useState("");
    const [commentsField, setCommentsField] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [buttonOptions, setButtonOptions] = useState("");


    console.log(`
        firstName: ${firstName}
        lastName: ${lastName}
        age:${age}
        postalCode:${postalCode}
        dayAndEveningButton: ${dayAndEveningButton}
        commentsField: ${commentsField}
        termsAccepted: ${termsAccepted}
        buttonOptions: ${buttonOptions}
        strawberry: ${strawberry}
        banana:${banana}
        apple: ${apple}
        kiwi: ${kiwi}`
    )


    function resetButton() {
        setStrawberry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }


    return (


        <>

            <h1>Fruitmand bezorgservice</h1>

            <div className="counter-row">
                <span>🍓Aardbeien</span>
                <CounterButtons
                    typeOfButton="button"
                    idOfButton="decrease"
                    nameOfButton="minus"
                    onClickOfButton={() => setStrawberry(strawberry - 1)}
                    disabled={strawberry === 0}
                    textOnButton="-"
                />
                <p>{strawberry}</p>

                <CounterButtons
                    typeOfButton="button"
                    idOfButton="increase"
                    nameOfButton="plus"
                    onClickOfButton={() => setStrawberry(strawberry + 1)}
                    textOnButton="+"
                />

            </div>

            <div className="counter-row">
                <span>🍌Bananen</span>
                <CounterButtons
                    typeOfButton="button"
                    idOfButton="decrease"
                    nameOfButton="minus"
                    onClickOfButton={() => setBanana(banana - 1)}
                    disabled={banana === 0}
                    textOnButton="-"
                />
                <p>{banana}</p>

                <CounterButtons
                    typeOfButton="button"
                    idOfButton="increase"
                    nameOfButton="plus"
                    onClickOfButton={() => setBanana(banana + 1)}
                    textOnButton="+"
                />
            </div>

            <div className="counter-row">
                <span>🍏Appels</span>
                <CounterButtons
                    typeOfButton="button"
                    idOfButton="decrease"
                    nameOfButton="minus"
                    onClickOfButton={() => setApple(apple - 1)}
                    disabled={apple === 0}
                    textOnButton="-"
                />
                <p>{apple}</p>

                <CounterButtons
                    typeOfButton="button"
                    idOfButton="increase"
                    nameOfButton="plus"
                    onClickOfButton={() => setApple(apple + 1)}
                    textOnButton="+"
                />
            </div>

            <div className="counter-row">
                <span>🥝Kiwi s</span>
                <CounterButtons
                    typeOfButton="button"
                    idOfButton="decrease"
                    nameOfButton="minus"
                    onClickOfButton={() => setKiwi(kiwi - 1)}
                    disabled={kiwi === 0}
                    textOnButton="-"
                />
                <p>{kiwi}</p>

                <CounterButtons
                    typeOfButton="button"
                    idOfButton="increase"
                    nameOfButton="plus"
                    onClickOfButton={() => setKiwi(kiwi + 1)}
                    textOnButton="+"
                />
            </div>


            <h2>Geselecteerde fruittypes: {SelectedFruitTypes}</h2>

            <FormButton
                typeOfButton="reset"
                idOfButton="reset-button"
                nameOfButton="reset"
                onClickOfButton={resetButton}
                textOnButton="Reset
                />


            <form>
                <fieldset>
                    <legend>Bestelformulier</legend>

                    <label htmlFor=" form-firstname">
                        <p>Voornaam</p>
                        <input
                            type=" text"
                            id=" formfirstname"
                            name=" firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>

                    <label htmlFor=" form-lastname">
                        <p>Achternaam</p>
                        <input type=" text"
                               id=" formlastname"
                               name=" lastName"
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                    <label htmlFor=" form-age">
                        <p>Leeftijd</p>
                        <input
                            type=" number"
                            id=" formage"
                            name=" age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <label htmlFor=" form-postalcode">
                        <p>Postcode</p>
                        <input
                            type=" text"
                            id=" form-postalcode"
                            name=" postalCode"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </label>

                    <h2>Bezorgfrequentie</h2>

                    <label htmlFor=" form-options">
                        <select
                            id=" options "
                            name=" buttonOptions"
                            value={buttonOptions}
                            onChange={(e) => setButtonOptions(e.target.value)}
                        >
                            <option value=" "></option>
                            <option value=" iedere-week">iedere week</option>
                            <option value=" om de week">om de week</option>
                            <option value=" iedere maand">iedere maand</option>


                        </select>
                        <div className=" radiobuttons">
                        <label htmlFor=" fordayandeveningbutton">
                            <input
                                type=" radio"
                                name=" dayAndEveningButton"
                                value=" everyday"
                                checked={dayAndEveningButton === " overdag"}
                                onChange={(e) => setDayAndEveningButton(e.target.value)}
                            />
                            <span>Overdag</span>
                        </label>
                        </div>




                    </label>

                    <div className=" radio-buttons">
                    <label htmlFor=" formdayandeveningbutton">
                        <input
                            type=" radio"
                            name=" dayAndEveningButton
                            value={savonds}
                            checked={dayAndEveningButton === " s-avonds"}
                            onChange={(e) => setDayAndEveningButton(e.target.value)}
                        />
                        <span>s Avonds</span>
                    </label>
                    </div>



                    <label htmlFor=" form-commentsfield">
                        <p>opmerking</p>
                        <textarea
                            id="formcommentsfield"
                            name="commentsField"
                            value={commentsField}
                            onChange={(e) => setCommentsField(e.target.value)}

                        />
                    </label>

                    <label htmlFor="formtermsaccepted">

                        <input
                            type="checkbox"
                            id="form-termsaccepted"
                            name="termsAccepted"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>




                    <button type=" submit">
                        Verzend
                    </button>
                </fieldset>
            </form>


        </>
    );
}

export default App;
