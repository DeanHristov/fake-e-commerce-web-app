import { render } from '@testing-library/react';
import { IComment } from '../../../types';
import Comment from './Comment';

const mockComment: IComment = {
  productId: '29a34b48-8343-4e3d-8c21-3548ba249936',
  _id: '29a34b48-8343-4e3d-8c21',
  name: 'John Doue',
  date: '20 April 2022, at 14:88 PM',
  email: 'john-doue@example.com',
  body: 'It is a great product!',
};

describe('UI/Component <Comment {...} />', () => {
  it('', () => {
    const { container } = render(<Comment {...mockComment} />);

    expect(container).toMatchSnapshot();
  });
});
