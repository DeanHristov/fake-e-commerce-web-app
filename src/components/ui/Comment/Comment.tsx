import Image from 'next/image';
import { FC } from 'react';
import { IComment } from '../../../types';

export interface ICommentProps extends Omit<IComment, 'productId' | 'email'> {}

const Comment: FC<ICommentProps> = ({ _id, name, body, date }) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white">
      <div className="relative flex gap-4">
        <Image
          src="/images/avatar.jpeg"
          width={64}
          height={20}
          className="relative rounded-lg -top-8 -mb-4 bg-white border"
          alt=""
        />
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
              {name}
            </p>
            <a className="text-gray-500 text-xl" href="#">
              <i className="fa-solid fa-trash"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">{body}</p>
    </div>
  );
};

export default Comment;
