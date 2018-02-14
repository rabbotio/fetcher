/* eslint-env jest */
describe('fetcher', () => {
  it('should able to get json', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://bx.in.th/api/`)

    expect(json[1]).toMatchObject({
      pairing_id: 1,
      primary_currency: expect.any(String),
      secondary_currency: expect.any(String),
      change: expect.any(Number),
      last_price: expect.any(Number),
      volume_24hours: expect.any(Number),
      orderbook:
        {
          bids: { total: expect.any(Number), volume: expect.any(Number), highbid: expect.any(Number) },
          asks: { total: expect.any(Number), volume: expect.any(Number), highbid: expect.any(Number) }
        }
    })

    done()
  })

  it('should able to get json with params', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://bx.in.th/api/tradehistory/`, {
      pairing: 1,
      date: '2017-12-12'
    })

    expect(json.data).toMatchObject(
      {
        avg: expect.any(String),
        high: expect.any(String),
        low: expect.any(String),
        volume: expect.any(String),
        open: expect.any(String),
        close: expect.any(String)
      }
    )
    done()
  })

  it('should able to get json with cors', async done => {
    const { getJSON } = require('../')
    const json = await getJSON(`https://api.coinmarketcap.com/v1/ticker/`, {
      limit: 10
    })

    expect(json[0]).toMatchObject(
      {
        "id": expect.any(String),
        "name": expect.any(String),
        "symbol": expect.any(String),
        "rank": expect.any(String),
        "price_usd": expect.any(String),
        "price_btc": expect.any(String),
        "24h_volume_usd": expect.any(String),
        "market_cap_usd": expect.any(String),
        "available_supply": expect.any(String),
        "total_supply": expect.any(String),
        "max_supply": expect.any(String),
        "percent_change_1h": expect.any(String),
        "percent_change_24h": expect.any(String),
        "percent_change_7d": expect.any(String),
        "last_updated": expect.any(String),
      }
    )
    done()
  })
})