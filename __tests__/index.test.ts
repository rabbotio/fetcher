/* eslint-env jest */
describe('fetcher', () => {
  it('should able to get json', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://bigquery.googleapis.com/discovery/v1/apis/bigquery/v2/rest`)

    expect(json).toMatchSnapshot()
    done()
  })

  it('should able to get json with params', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://api.binance.com/api/v3/ticker/price`, {
      symbol: 'XLMETH'
    })

    expect(json).toMatchSnapshot()
    done()
  })

  it('should able to get json with cors', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://api.coinmarketcap.com/v1/ticker/`, {
      limit: 10
    })

    expect(json[0]).toMatchObject({
      id: expect.any(String),
      name: expect.any(String),
      symbol: expect.any(String),
      rank: expect.any(String),
      price_usd: expect.any(String),
      price_btc: expect.any(String),
      '24h_volume_usd': expect.any(String),
      market_cap_usd: expect.any(String),
      available_supply: expect.any(String),
      total_supply: expect.any(String),
      max_supply: expect.any(String),
      percent_change_1h: expect.any(String),
      percent_change_24h: expect.any(String),
      percent_change_7d: expect.any(String),
      last_updated: expect.any(String)
    })
    done()
  })
})
