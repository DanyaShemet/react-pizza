import React, {memo} from "react";
import PropTypes from "prop-types";


export const Categories = memo(function Categories({activeCategory, items, onClickCategoryItem}) {

    const elementsCategories = items && items.map((el, index) => <li
        className={activeCategory === index ? 'active' : ''}
        onClick={() => onSelectItem(index)}
        key={`${el}_${index}`}>
        {el}
    </li>)

    const onSelectItem = (index) => {
        onClickCategoryItem(index)
    }


    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => {
                    onSelectItem(null)
                }}>Все
                </li>
                {elementsCategories}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategoryItem: PropTypes.func.isRequired
}

Categories.defaultProps = {
    activeCategory: null, items: []
}


