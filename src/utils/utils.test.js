import {
    numberFormatter,
    filterCampaignsWithWrongPeriod,
    filterCampaignsBySearchText,
    filterCampaignsByDate,
} from './utils';

test('Testing numberFormatter Util', () => {
  expect(
    numberFormatter(222333)).toBe('222.3k');
  expect(
    numberFormatter(1222333)).toBe('1.2M');
});

const wrongDateCampaignMock = [{"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017","Budget":505602, "userId": 5}];

test('Testing filterCampaignsWithWrongPeriod Util', () => {
  expect(
    filterCampaignsWithWrongPeriod(wrongDateCampaignMock)).toStrictEqual([]);
});


const threeCampaignMock = [
    {"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","Budget":88377, "userId": 3},
    {"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018","Budget":608715, "userId": 6},
    {"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017","Budget":179838, "userId": 1},
];

const oneCampaignResponseMock = [{"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018","Budget":608715, "userId": 6}];

test('Testing filterCampaignsBySearchText Util', () => {
  expect(
    filterCampaignsBySearchText(threeCampaignMock, 'j')).toStrictEqual(oneCampaignResponseMock);
});

test('Testing filterCampaignsByDate Util', () => {
  expect(
    filterCampaignsByDate({
        campaigns: threeCampaignMock,
        startDate: '2017-11-20',
        endDate: '2018-11-22',
    })).toStrictEqual(oneCampaignResponseMock);

  expect(
    filterCampaignsByDate({
        campaigns: threeCampaignMock,
        startDate: '2016-11-20',
        endDate: '2020-11-22',
        searchText: 'jax'
    })).toStrictEqual(oneCampaignResponseMock);

  expect(
    filterCampaignsByDate({
        campaigns: wrongDateCampaignMock,
        startDate: '2016-11-20',
        endDate: '2020-11-22',
        searchText: 'jax'
    })).toStrictEqual([]);
});
