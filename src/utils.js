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

export const filterCompaignsWithWrongPeriod = (compaigns) => compaigns.filter(
    (el) => new Date(el.startDate) < new Date(el.endDate)
);

export const filterCompaignsBySearchText = (compaigns, searchText) => {
   return compaigns.filter((el) =>
        el.name
        && searchText
        && el.name.toLowerCase().includes( searchText.toLowerCase())
    );
};

export const filterCompaignsByDate = ({ compaigns, startDate, endDate, searchText }) => {
    const filteredComaings = filterCompaignsWithWrongPeriod(compaigns);
    const filteredComaingsBySearch = searchText
        ? filterCompaignsBySearchText(filteredComaings, searchText)
        : filteredComaings;

    return filteredComaingsBySearch.filter(
        (el) => {
            if (
                startDate
                && endDate
                && new Date(el.startDate) >= new Date(startDate)
                && new Date(el.endDate) <= new Date(endDate)
            ) {
                return el;
            };

            if (
                startDate
                && !endDate
                && new Date(el.startDate) >= new Date(startDate)
            ) {
                return el;
            };

            if (
                endDate
                && !startDate
                && new Date(el.endDate) <= new Date(endDate)
            ) {
                return el;
            };

            if (
                !startDate
                && !endDate
            ) {
                return el;
            };

            return null;
        }
    );
};
