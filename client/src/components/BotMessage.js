import { nanoid } from "nanoid";
import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function BotMessage({message, addMessage}) {
    console.log(message);
    const [interactions, setInterecaction] = useState(message);
    const [countOfActive, setCountOfActive] = useState(0);

    function handleClick(id) {
        if (countOfActive === 0) {
            setCountOfActive(prevCount => prevCount + 1);
            setInterecaction(interactions.map(interaction => {
                if (interaction.id === id) {
                    return {
                        ...interaction,
                        isActive: true
                    }
                }
                else{
                    return interaction;
                }
            }))    
        }
        
    }
    return (
        <div>
            <span>Bot</span>
                {interactions.map(interaction => {
                    return <button type="button" onClick={() => handleClick(interaction.id)} className={interaction.isActive ? "bot-page-question--active" : "bot-page-question"}>{interaction.question}</button>
                })}
                <Link to={`chat?room=${nanoid()}`}>Podpora</Link>
                {interactions.map(interaction => {
                    return  <div>
                        {interaction.isActive ? 
                        <div>
                            <p>{interaction.answer}</p>
                            <p>Potřebuješ zkusit jinou možnost?</p>
                            <button type="button" onClick={() => addMessage()}>Ano</button>
                        </div> : null}
                    </div>
                })}  
        </div>
    )
}

