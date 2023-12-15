import { ReduxState } from '@/store';
import { TWishList } from '@/store/slices';

export const selectWishList = (state: ReduxState): TWishList => state.wishList;
