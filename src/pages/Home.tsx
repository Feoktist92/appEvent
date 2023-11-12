import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchProducts, selectItems } from '../redux/slices/itemsSlice';
import { useAppDispatch } from '../redux/store';

import { ItemBlock, Skeleton, LoadingError } from '../components';

const Home: React.FC = () => {
    const { items, status } = useSelector(selectItems);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className='container'>
            <h1 className='content__title'>Все товары</h1>
            {status === 'error' ? (
                <LoadingError />
            ) : (
                <>
                    <div className='content__items'>
                        {status === 'loading'
                            ? [...new Array(4)].map((_, index) => (
                                  <Skeleton key={index} />
                              ))
                            : items.map((obj: any) => (
                                  <ItemBlock
                                      id={obj.id}
                                      name={obj.name}
                                      image={obj.image}
                                      price={obj.price}
                                      key={obj.id}
                                  />
                              ))}
                    </div>
                    {items.length === 0 && <LoadingError />}
                </>
            )}
        </div>
    );
};
export default Home;
