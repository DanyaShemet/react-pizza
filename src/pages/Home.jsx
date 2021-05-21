import {Categories, PizzaItem, SortPopup, Loader} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {useCallback, useEffect} from "react";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItem = [{name: 'популярности', type: 'rating', order: 'desc'}, {name: 'цене', type: 'price', order: 'desc'}, {name: 'алфавиту', type: 'name', order: 'asc'}]

export function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const cartItems = useSelector(({cart}) => cart.items)
    const {category, sortBy} = useSelector(({filters}) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(category,sortBy))
    }, [category,sortBy])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSort = useCallback(sortObj => {
        dispatch(setSortBy(sortObj))
    }, [])

    const handlerPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }




    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} items={categoryNames} onClickCategoryItem={onSelectCategory}/>
                <SortPopup activeSortType={sortBy.type} items={sortItem} onClickSortItem={onSelectSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map(pizza => (<PizzaItem
                        onAddPizzaToCart={handlerPizzaToCart}
                        item={pizza}
                        inCartCount={cartItems[pizza.id] && cartItems[pizza.id].totalOneTypePizza.length}
                        key={pizza.id}/>))
                    : Array(10).fill(0).map((_, index) => <Loader key={index}/>)}

            </div>
        </div>
    )
}