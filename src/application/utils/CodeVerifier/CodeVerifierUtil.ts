const getPlainCode = (): string => {
  const CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  const values = crypto.getRandomValues(new Uint8Array(64))

  return values.reduce(
    (prev, current) => prev + CHARACTERS[current % CHARACTERS.length],
    '',
  )
}

const sha256 = async (value: string): Promise<ArrayBuffer> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(value)

  return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (value: ArrayBuffer): string =>
  btoa(
    String.fromCharCode(...new Uint8Array(value))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_'),
  )

export const getCodeUtil = async () => {
  const codeVerifier = getPlainCode()
  const hashedCode = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashedCode)

  return { codeVerifier, codeChallenge }
}
