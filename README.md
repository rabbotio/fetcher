# fetcher
Simply fetch get/post as json

```js
import { getJSON, postJSON } from '@rabbotio/fetcher'

// get JSON
const json = await getJSON(`https://bx.in.th/api/`)
console.log(json)

// post JSON with params
const json = await postJSON(`${this.facebookURL}?access_token=${accessToken}`, {
  recipient: {
    id: recipientId
  },
  message: {
    text: messageText
  }
})
console.log(json)

// get JSON with params
const json = await getJSON(`https://bx.in.th/api/tradehistory/`, {
  pairing: 1,
  date: '2017-12-12'
})
console.log(json)

// passing headers
const json = await postJSON('https://api.line.me/v2/bot/message/reply', {
    replyToken: replyToken,
    messages: messages
  }, {
  'Authorization': `Bearer ${accessToken}`,
})
console.log(json)
```