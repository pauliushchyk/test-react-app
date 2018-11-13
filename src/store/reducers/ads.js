import { ADS_GET, FAILURE, REQUEST, SUCCESS } from '../actions-types';

const initialState = {
  ads: [],
  pagination: {},
  total: null,
};

export const ads = (state = initialState, action) => {
  switch (action.type) {
    case ADS_GET[FAILURE]:
      return state;
    case ADS_GET[REQUEST]:
      return state;
    case ADS_GET[SUCCESS]:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
