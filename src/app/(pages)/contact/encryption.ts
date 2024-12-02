const encryptMessage: (
  publicKey: any,
  encrypted: any
) => Promise<ArrayBuffer> = (publicKey, encoded) => {
  return crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded
  )
}

const generatePublicKey = async () => {
  return crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  )
}

const decryptMessage: (key: any, encrypted: any) => Promise<string> = async (
  key,
  encrypted
) => {
  const decrypted = await crypto.subtle.decrypt(
    {
      name: "RSA-OAEP",
    },
    key,
    encrypted
  )

  const dec = new TextDecoder()
  return dec.decode(decrypted)
}

const decryptStrings: (str: string) => Promise<string> = async str => {
  const enc = new TextEncoder()
  const strEncoded = enc.encode(str)

  const key = await generatePublicKey()
  const publicKey = key.publicKey
  const privateKey = key.privateKey

  const encryptedStr = await encryptMessage(publicKey, strEncoded)

  const decryptedStr = await decryptMessage(privateKey, encryptedStr)
  return decryptedStr
}

export default decryptStrings
