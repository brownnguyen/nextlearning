import { bookingReducer as booking } from './bookingSlice';

const rootReducer = booking;

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;