import { useSelector } from 'react-redux';
import { addProduct, selectCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

type ItemBlockProps = {
    id: number;
    name: string;
    image: string;
    price: number;
};

export const ItemBlock: React.FC<ItemBlockProps> = ({
    name,
    image,
    price,
    id,
}) => {
    const { products } = useSelector(selectCart);
    const dispatch = useAppDispatch();

    const product = {
        id,
        name,
        image,
        price,
        count: 1,
    };

    const cartProduct = products.find(
        (obj: { id: number }) => obj.id === product.id
    );

    const addedCount = cartProduct ? cartProduct.count : 0;

    const onClickAdd = () => {
        dispatch(addProduct(product));
    };

    return (
        <div className='item-block'>
            <div className='item-block__image-wrapper'>
                <img className='item-block__image' src={image} alt='product' />
            </div>

            <h4 className='item-block__title'>{name}</h4>

            <div className='item-block__bottom'>
                <div className='item-block__price'>
                    от <span>{price} ₽</span>
                </div>
                {addedCount === 0 ? (
                    <div className='button button--add' onClick={onClickAdd}>
                        <span>Добавить в корзину</span>
                    </div>
                ) : (
                    <div className='button button--order'>
                        <Link to='/cart'>Оформить заказ</Link>
                    </div>
                )}
            </div>
        </div>
    );
};
