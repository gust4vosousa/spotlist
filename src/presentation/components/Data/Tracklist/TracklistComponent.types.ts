import { ITrack } from '../../../../domain/entities'

export interface ITracklistProps {
  handleExport: () => void
  handleRefresh: () => void
  handleReset: () => void
  isBusy: boolean
  tracks: ITrack[]
}
