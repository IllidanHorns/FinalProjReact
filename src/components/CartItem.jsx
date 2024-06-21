import axios from 'axios';
import Item from './Item';
function CartItem(props) { 
    //props - аргументы для тега

    const onSearch = (inputValue) => {
        props.setSearch(inputValue.target.value);
    }

    const onAddOverlay = (obj) => {
        try{
            if (props.overlayItems.find(item => Number(item.id)=== Number(obj.id)))
                {
                    axios.delete(`http://localhost:3001/overlays/${obj.id}`);
                    props.setoverlayItems((over)=> over.filter(item => Number(item.id) !== Number(obj.id)));
                }
                else{
                    axios.post('http://localhost:3001/overlays', obj);
                    props.setoverlayItems([...props.overlayItems, obj]);
                }
        }
        catch
        {
            alert('Error')
        }
    };

    return (
        <div className='cart'>
        {
            
            props.item
            .filter((item) => 
                item.name.toLowerCase().includes(props.search.toLowerCase())
            )
            .map(obj=>{
                return (
                <Item
                    key={obj.id} //Переменные из json
                    id={obj.id}
                    myId={obj.id}
                    name={obj.name}
                    description={obj.description}
                    price={obj.price}

                    onPlus={(cartObj) => onAddOverlay(cartObj)}
                />
                )
            })
        }
        </div>
    )
}

export default CartItem; //Определяет блок кода как блок html