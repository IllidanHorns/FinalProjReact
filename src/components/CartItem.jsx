import Item from './Item';
function CartItem(props) { //props - аргументы для тега
    return (
        <div className='cart'>
        {
            props.item.map(obj=>{
                return (
                <Item
                key={obj.id} //Переменные из json
                id={obj.id}

                name={obj.name}
                description={obj.description}
                price={obj.price}
                />
                )
            })
        }
        </div>
    )
}

export default CartItem; //Определяет блок кода как блок html