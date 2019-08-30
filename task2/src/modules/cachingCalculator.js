export const cachingCalc = (function(){


    const methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
    };
    let CACHE = {};


  const operations = (str) => {
        const split = str.split(" ");
        const firstElement = +split[0];
        const operation = split[1];
        const secondElement = +split[2];
        return methods[operation](firstElement, secondElement);
    };


   const addToCache = (data) => {
        CACHE[data.toString()] = operations(data);
        console.log(CACHE)
        return operations(data);
    };

   const showFromCache = (key) => {
        console.log("It is from the CACHE");
        return CACHE[key];
    };

  const  caching = (data) => {
        if (CACHE[data.toString()]) {
            console.log('1')
            return showFromCache(data.toString());
        } else {
            console.log('2', CACHE)
            return addToCache(data);
        }
    };

    return {
        caching: caching
    }
})()

