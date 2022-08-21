import React , {useState, useEffect}from 'react'
import "./Jokes.scss"
import { async } from 'q';

const Jokes = () => {
    const url = 'http://api.icndb.com/jokes/random'
    const [isLoading, setIsLoading] = useState(true)
    const [joke, setJoke] = useState({})

   async function getJoke(){
       setIsLoading(true)
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
       setJoke(data);
       setIsLoading(false)

    }


    useEffect(() => {
        setTimeout(() =>{
            getJoke()

        }, 3000);
    }, []);

    return (
        <section className = 'jokes-sec --center-all'>
            <div className = 'container joke --bg-light --card'>
                <h3>EmmyB Random Jokes Generator</h3>
                <h1 className = 'smiley'>😊</h1>
                <hr/>
                {isLoading ? (
                    <h3>Loading...</h3> 
                ) : (
                    <p className = '--my'>{joke.value.joke} </p>
                )}
               
                <hr/>
                <button className = '--btn --btn-primary --btn-block' onClick = {getJoke}>Generate New Joke</button>
            
            </div>
        </section>
    )
}

export default Jokes

