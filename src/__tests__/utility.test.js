import { getSummaryQueryId } from '../utility'

it('generates an id', () => {
    const startDate = '2015-01-01'
    const endDate = '2016-01-01'
    const actual = getSummaryQueryId({startDate, endDate})
    const expected = '2015-01-01/2016-01-01'
    expect(actual).toEqual(expected)
})