// https://latest.currency-api.pages.dev/v1/currencies/usd.json
import React from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    return data;
}

export default useCurrencyInfo