import './App.css'
import {useState} from "react";

function App() {


    const [strawBerry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    return (


        <>

            <h1>Fruitmand bezorgservice</h1>

            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                <span>Aardbeien</span>
                <button
                    onClick={() => setStrawberry(strawBerry - 1)}
                    disabled={strawBerry === 0}
                >

                    -
                </button>

                <button onClick={() => setStrawberry(strawBerry + 1)}>
                    +
                </button>
                <p>{strawBerry}</p>
            </div>

            <span>Bananen</span>
            <button onClick={() => setBanana(banana - 1)}>

                -
            </button>

            <button onClick={() => setBanana(banana + 1)}>
                +
            </button>

            <p>{banana}</p>

            <span>Appels</span>
            <button onClick={() => setApple(apple - 1)}>

                -
            </button>

            <button onClick={() => setApple(apple + 1)}>
                +
            </button>

            <p>{apple}</p>

            <span>Kiwi s</span>
            <button onClick={() => setKiwi(kiwi - 1)}>

                -
            </button>

            <button onClick={() => setKiwi(kiwi + 1)}>
                +
            </button>

            <p>{kiwi}</p>

            <button type="button">Reset</button>
        </>
    )
}

export default App
