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

export const filterCampaignsWithWrongPeriod = (campaigns) => campaigns.filter(
    (el) => new Date(el.startDate) < new Date(el.endDate)
);

export const filterCampaignsBySearchText = (campaigns, searchText) => {
   return campaigns.filter((el) =>
        el.name
        && searchText
        && el.name.toLowerCase().includes( searchText.toLowerCase())
    );
};

export const filterCampaignsByDate = ({ campaigns, startDate, endDate, searchText }) => {
    const filteredComaings = filterCampaignsWithWrongPeriod(campaigns);
    const filteredComaingsBySearch = searchText
        ? filterCampaignsBySearchText(filteredComaings, searchText)
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
