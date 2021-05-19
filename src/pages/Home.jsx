import {Categories, PizzaItem, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {useCallback} from "react";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItem = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]

export function Home (){
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryNames} onClickCategoryItem={onSelectCategory}/>
                <SortPopup items={sortItem}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                  items &&  items.map(pizza =>  <PizzaItem item={pizza}  key={pizza.id}/>)
                }
            </div>
        </div>
    )
}