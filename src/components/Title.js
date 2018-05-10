import React from 'react';

const Title = ({selectedMenu}) => {
    return (
        <h3 className="product-title"> Available Products
            { selectedMenu.category &&
                <span className="sub-category" > | {selectedMenu.category || ''}</span>
            }
            { selectedMenu.subCategory &&
                <span className="sub-category" > | {selectedMenu.subCategory || ''}</span>
            }
        </h3>
    );
}

export default Title;