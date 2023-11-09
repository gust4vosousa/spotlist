export const useAuthCode = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const authCode = urlParams.get('code')

  return { authCode }
}
