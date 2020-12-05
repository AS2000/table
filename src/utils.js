export const numberFormatter = (num) => {
    if (Math.abs(num) > 999999) {
        return (
            Math.sign(num)*((Math.abs(num)/1000000).toFixed(1)) + 'M'
        )
    }

    return Math.abs(num) > 999
        ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k'
        : Math.sign(num)*Math.abs(num);
};
