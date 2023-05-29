import { useEffect } from "react";
import words from "../helpers/data.json";

export const Test = () => {
    const wordlist = words.flatMap((arr) => arr.split(" "));
    useEffect(() => {
        document.onkeydown = (e) => {
            console.log(e);
        };
    }, [""]);

    console.log(wordlist);
    return (
        <div className='test'>
            <div className='word-list'>
                {wordlist.map((word, key) => (
                    <div key={key} className='word'>
                        {word.split("").map((char, key) => (
                            <span key={key}>{char}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
