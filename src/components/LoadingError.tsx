import React from 'react';

export const LoadingError: React.FC = () => {
    return (
        <div className='loading-error'>
            <h2>Ошибка при загрузке данных</h2>
            <p>
                К сожалению, не удалось получить данные с сервера{' '}
                <span className='sad-smile'>😕</span>
            </p>
        </div>
    );
};
