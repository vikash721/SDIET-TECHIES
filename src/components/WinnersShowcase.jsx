import React from 'react';
import WinnerCard from './WinnerCarousel';

const WinnersShowcase = () => {
    const winners = [
        {
            winner: 'John Doe',
            eventName: 'Hackathon 2025',
            imageUrl: 'https://via.placeholder.com/150',
            prize: 'Gold Medal & $1000 Cash Prize',
        },
        {
            winner: 'Jane Smith',
            eventName: 'College Fest Dance Competition',
            imageUrl: 'https://via.placeholder.com/150',
            prize: 'Silver Medal & $500 Gift Card',
        },
        {
            winner: 'Alice Brown',
            eventName: 'Sports Championship',
            imageUrl: 'https://via.placeholder.com/150',
            prize: 'Bronze Medal & Certificate',
        },
    ];

    return (
        <div className="winners-showcase py-8 px-4 bg-[#f4f4f4]">
            <h2 className="text-3xl text-center font-bold text-[#291e00] mb-8">
                Event Winners
            </h2>
            <div className="winner-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {winners.map((winner, index) => (
                    <WinnerCard
                        key={index}
                        winner={winner.winner}
                        eventName={winner.eventName}
                        imageUrl={winner.imageUrl}
                        prize={winner.prize}
                    />
                ))}
            </div>
        </div>
    );
};

export default WinnersShowcase;
