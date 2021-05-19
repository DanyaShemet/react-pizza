import React, {memo} from "react";

export const Categories = memo(function Categories({items, onClickCategoryItem}) {
    const [activeItem, setActiveItem] = React.useState(null)
    const elementsCategories = items && items.map((el, index) => <li className={activeItem === index ? 'active' : ''}
                                                                     onClick={() => onSelectItem(index)} key={`${el}_${index}`}>{el}</li>)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickCategoryItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => {onSelectItem(null)}}>Все</li>
                {elementsCategories}
            </ul>
        </div>
    )
})

