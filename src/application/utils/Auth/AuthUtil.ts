export const authUtil = () => {
  const authCode = localStorage.getItem('code')
  const accessToken = localStorage.getItem('access_token')

  return { authCode, accessToken }
}
