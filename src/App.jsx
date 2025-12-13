import './App.css'
import {useState} from "react";

function App() {


    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [postalCode, setPostalCode] = useState("");
    // const [weeklyButton, setWeeklyButton] = useState("");
    // const [dayAndEveningButton, setDayAndEveningButton] = useState("");
    const [commentsField, setCommentsField] = useState("");
    // const [termsAccepted, setTermsAccepted] = useState("");
    // const [sendButton, setSendButton] = useState("");


    const SelectedFruitTypes =
        (strawberry > 0 ? 1 : 0) +
        (banana > 0 ? 1 : 0) +
        (apple > 0 ? 1 : 0) +
        (kiwi > 0 ? 1 : 0);


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
            <span>Aardbeien</span>
            <button
                onClick={() => setStrawberry(strawberry - 1)}
                disabled={strawberry === 0}
            >

                -
            </button>

            <p>{strawberry}</p>

            <button onClick={() => setStrawberry(strawberry + 1)}>
                +
            </button>

        </div>

        <div className="counter-row">
            <span>Bananen</span>
            <button
                onClick={() => setBanana(banana - 1)}
                disabled={banana === 0}
            >
                -

            </button>

            <p>{banana}</p>

            <button onClick={() => setBanana(banana + 1)}>
                +
            </button>


        </div>

        <div className="counter-row">
            <span>Appels</span>
            <button onClick={() => setApple(apple - 1)}
                    disabled={apple === 0}
            >
                -
            </button>

            <p>{apple}</p>

            <button onClick={() => setApple(apple + 1)}>
                +
            </button>


        </div>

        <div className="counter-row">
            <span>Kiwi s</span>
            <button onClick={() => setKiwi(kiwi - 1)}
                    disabled={kiwi === 0}
            >
                -
            </button>

            <p>{kiwi}</p>

            <button onClick={() => setKiwi(kiwi + 1)}>
                +
            </button>


        </div>

        <h2>Geselecteerde fruittypes: {SelectedFruitTypes}</h2>

        <button onClick={resetButton}>
            Reset
        </button>

        <form>
            <fieldset>
                <label htmlFor="form-firtsname">
                    Voornaam
                    <input
                        type="text"
                        id="form-firstname"
                        name="firtsName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>

                <label htmlFor="form-lastname">
                    Achternaam
                    <input type="text"
                           id="form-lastname"
                           name="lastName"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="form-age">
                    Leeftijd
                    <input
                        type="number"
                        id="form-age"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <label htmlFor="form-postalcode">
                       Postcode
                <input
                    type="text"
                    id="form-postalcode"
                    name="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
            </label>
            <label htmlFor="form-commentsfield">
                   opmerking
                   <textarea
                       id="form-commentsfield"
                       name="commentsField"
                       value={commentsField}
                       onChange={(e) => setCommentsField(e.target.value)}
                       />
            </label>
            <button type="submit">
                Verzend
            </button>
        </fieldset>
        </form>


</>
)
}

export default App
