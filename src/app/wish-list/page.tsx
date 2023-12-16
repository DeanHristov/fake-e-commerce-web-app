import { Metadata } from 'next';
import WishListView from '@/components/containers/WishListView';

export const metadata: Metadata = {
  title: 'Wish list',
};

// TODO Sync the items with the BE if the user has active token!
const WishListPage = () => {
  return (
    <section className="wishlist-section">
      <WishListView />
    </section>
  );
};

export default WishListPage;
