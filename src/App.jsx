import './App.css'
import {useState} from "react";

function App() {


    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    // function resultFruitbasket() {
    //     console.log(setStrawberry, setBanana, setApple,setKiwi())
 const SelectedFruitTypes =
     (strawberry > 0 ? 1 : 0) +
     (banana > 0 ? 1 : 0) +
     (apple > 0 ? 1 : 0) +
     (kiwi > 0 ? 1 : 0) ;



    function resetButton() {
        setStrawberry(0);
        setBanana(0);
        setApple(0);
        setKiwi(0);
    }

    return (


        <>

            <h1>Fruitmand bezorgservice</h1>


                <span>Aardbeien</span>
                <button
                    onClick={() => setStrawberry(strawberry - 1)}
                    disabled={strawberry === 0}
                >

                    -
                </button>

                <button onClick={() => setStrawberry(strawberry + 1)}>
                    +
                </button>
                <p>{strawberry}</p>


            <span>Bananen</span>
            <button
                onClick={() => setBanana(banana - 1)}
                disabled={banana === 0}
            >
                -
            </button>

            <button onClick={() => setBanana(banana + 1)}>
                +
            </button>

            <p>{banana}</p>

            <span>Appels</span>
            <button onClick={() => setApple(apple - 1)}
                    disabled={apple === 0}
            >
                -
            </button>

            <button onClick={() => setApple(apple + 1)}>
                +
            </button>

            <p>{apple}</p>

            <span>Kiwi s</span>
            <button onClick={() => setKiwi(kiwi - 1)}
                    disabled={kiwi === 0}
            >
                -
            </button>

            <button onClick={() => setKiwi(kiwi + 1)}>
                +
            </button>

            <p>{kiwi}</p>

            <h2>Geselecteerde fruittypes: {SelectedFruitTypes}</h2>

            <button onClick={resetButton}>
                Reset
            </button>


        </>
    )
}

export default App
