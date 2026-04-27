import { Button, Frog } from 'frog'
import { handle } from 'frog/next'

const app = new Frog({
  basePath: '/api',
  title: 'BaseTip',
})

app.frame('/', (c) => {
  return c.res({
    image: 'https://raw.githubusercontent.com/hsnlgc/basetip-frame/main/1775497540575.png',
    intents: [
      <Button.Transaction target="/send-tip">0.001 ETH Ismarla 🔵</Button.Transaction>
    ]
  })
})

app.transaction('/send-tip', (c) => {
  return c.send({
    chainId: 'eip155:8453',
    to: '0x536Bf00a6003e9E67ec73012EFCF035934855fe4',
    value: BigInt(1000000000000000)
  })
})

export const GET = handle(app)
export const POST = handle(app)
