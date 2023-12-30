export const useAuthCode = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const authCode = urlParams.get('code')

  const codeVerifier = window.localStorage.getItem('code_verifier')

  return { authCode, codeVerifier }
}
