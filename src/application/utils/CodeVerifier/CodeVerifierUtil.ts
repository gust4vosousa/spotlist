const getCodeVerifier = (length: number): string => {
  const CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  const values = crypto.getRandomValues(new Uint8Array(length))

  return values.reduce(
    (prev, current) => prev + CHARACTERS[current % CHARACTERS.length],
    '',
  )
}

const sha256 = async (plainCode: string): Promise<ArrayBuffer> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plainCode)

  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input: ArrayBuffer) =>
  btoa(String.fromCharCode.apply(null, [...new Uint8Array(input)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

export const getCodeUtil = async () => {
  const codeVerifier = getCodeVerifier(64)
  const hashedCode = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashedCode)

  return { codeVerifier, codeChallenge }
}
