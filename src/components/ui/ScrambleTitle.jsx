import React, { useState, useEffect, useRef } from 'react';

const CYBER_CHARS = 'XXXXYYYYZZZZ0123456789@@##$$%%&&**++==__<>/[]{}—';

export const ScrambleTitle = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const startScramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            // CORREÇÃO: Removemos o "prev =>" e deixamos "() =>"
            // já que não precisamos do estado anterior, apenas do texto original
            setDisplayText(() =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        startScramble();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <h1
            className={`font-mono cursor-default ${className}`}
            onMouseEnter={startScramble}
        >
            {displayText}
        </h1>
    );
};