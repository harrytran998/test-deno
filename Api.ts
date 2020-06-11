import { serve } from 'https://deno.land/std@0.56.0/http/server.ts'

const encoder = new TextEncoder()
// const data = encoder.encode`Hello bae. just test Deno`
// const data = encoder.encode`Template String Array is not assignable to string`
const textData = encoder.encode('Hello bae. just test Deno')

await Deno.writeFile('test.txt', textData, { create: true, mode: 0o777 })

const decoder = new TextDecoder()
const decodeData = decoder.decode(textData)

const server = serve({ port: 8000 })
console.log('http://localhost:8000/')
for await (const req of server) {
  req.respond({ body: `Hello World\n${decodeData}` })
}
