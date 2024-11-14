// Components/Chat.js
import { useState } from 'react';
import AiPlanetSmallLogo from "/Ai-planet-small-logo.svg";
import userDp from "/userDp.svg";

export default function Chat() {
    const [messages,] = useState([
        {
            id: 1,
            question: 'What do you want to?',
            answer: 'I want to Love you! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos laudantium facilis sapiente eos nulla, cupiditate illum nesciunt consequuntur sequi, velit magnam voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni eaque incidunt ratione temporibus. Totam eum, sit ipsa aliquam, explicabo maiores consequatur ipsum incidunt dignissimos nihil quibusdam tempore natus autem aliquid deleniti quo!'
        },
        {
            id: 2,
            question: 'when?',
            answer: 'I want to Love you! Lorem ipsum,'
        },

    ]);

    return (
        <div className="mt-20 md:m-16">
            {messages.map((message) => (
                <div key={message.id} className='rounded-lg md:p-3 md:m-3 mb-10' >

                    <div className="p-3 md:m-3 mb-5 flex items-start space-x-4">
                        <img src={userDp} className="h-6 w-6" alt="Add Icon" />
                        <div className="flex-1">
                            {message.question}
                        </div>
                    </div>

                    <div className="p-3 md:m-3 flex items-start space-x-4">
                        <img src={AiPlanetSmallLogo} className="h-6 w-6" alt="Add Icon" />
                        <div className="flex-1">
                            {message.answer}
                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
}
