import { action } from './action';
import { ADS_GET, FAILURE, REQUEST, SUCCESS } from '../actions-types';

export default {
  failure: error => action(ADS_GET[FAILURE], { error }),
  request: () => action(ADS_GET[REQUEST]),
  success: data => action(ADS_GET[SUCCESS], { ...data }),
};
