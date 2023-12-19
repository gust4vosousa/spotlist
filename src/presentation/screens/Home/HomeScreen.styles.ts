import { makeStyles } from 'tss-react/mui'

export const useHomeScreenStyles = makeStyles()(() => ({
  containerCard: {
    padding: 16,
    width: '100%',
  },
  containerGrid: {
    display: 'flex',
    gap: 16,
    width: '100%',
  },
}))
