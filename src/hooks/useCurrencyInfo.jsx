import { useState } from "react";
import { useEffect } from "react";

const userCurrencyInfo = (currency) => {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((resp) => resp.json())
            .then((resp) => setData(resp[currency]));
    }, [currency])

    return data;

}

export default userCurrencyInfo;