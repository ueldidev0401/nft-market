import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { RootState } from '../../../modules/reducer'
import { getTokenIds } from '../../../modules/nft/parcel/selectors'
import {
  MapStateProps,
  MapDispatchProps,
  MapDispatch
} from './EstateDetail.types'
import EstateDetail from './EstateDetail'

const mapState = (state: RootState): MapStateProps => {
  return {
    tokenIds: getTokenIds(state)
  }
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path))
})

export default connect(mapState, mapDispatch)(EstateDetail)
