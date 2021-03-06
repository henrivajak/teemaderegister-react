import * as types from '../constants/ActionTypes'

const INITIAL_STATE = {
  meta: {},
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CURRICULUM_LOADED: {
      const { meta } = action
      return {
        ...state,
        meta,
        loading: false
      }
    }

    case types.CURRICULUM_INIT:
      return INITIAL_STATE

    default:
      return {
        ...state
      }
  }
}
