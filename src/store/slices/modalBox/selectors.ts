import { ReduxState } from '@/store';
import { IModalBox } from '@/store/slices';

export const selectModalBox = (state: ReduxState): IModalBox => state.modalBox;
