import React from 'react';
import currencyFormatter from 'currency-formatter';

const CurrencyFormatter = (props) => {
    return (
        <span>
            {currencyFormatter.format(props.amount, {locale: 'en-GB'})}
        </span>
    );
}

export default CurrencyFormatter;