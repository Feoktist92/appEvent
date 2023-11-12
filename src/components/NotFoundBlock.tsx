import React from 'react';

export const NotFoundBlock: React.FC = () => {
    return (
        <div className='notFound'>
            <h1>
                <span>😕</span>
                <br />
                Ничего не найдено
            </h1>
            <p className='notFound__description'>
                К сожалению данная страница отсутствует в нашем
                интернет-магазине
            </p>
        </div>
    );
};
