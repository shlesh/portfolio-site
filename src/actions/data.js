import { types } from '../types/types';
import { details } from '../data folder/data';

export const setDetails = () => {
    return {
        type: types.en,
        payload: details,
    };
};
