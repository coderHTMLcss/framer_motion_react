import React from 'react';
type CardProps = {
    card: {
        url: string
    }
}

function Card({ card }: CardProps) {
    console.log(card);

    return (
        <div className='group relative w-[10rem] h-[10rem] overflow-hidden bg-neutral-200'>
            <div style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
                className='absolute inset-0 z-0 transition-transform duration-300
                 group-hover:scale-110'
            >
            </div>
        </div>
    )
}

export default Card
