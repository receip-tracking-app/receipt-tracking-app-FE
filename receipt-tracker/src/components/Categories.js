import React from 'react';
import Category from './Category';




const Categories = (props) => {

    return(
    
        <div>
            <h1>Categories:</h1>
            {
                props.categories.map(category => {
                    return  <div className="item-list"><Category category={category } /> </div>
                })
            }  
        </div>

    );
};


export default Categories;