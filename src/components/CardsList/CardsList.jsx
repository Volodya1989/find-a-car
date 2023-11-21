import Card from 'components/Card/Card';
import { List } from './CardsList.styled';
import ReactPaginate from 'react-paginate';

const CardsList = ({
  cars,
  onClick,
  subset,
  onPageChange,
  pageCount,
  forcePage,
}) => {
  return (
    <>
      <List>
        {subset?.map(
          ({
            showBridge = false,
            id,
            heading,
            subheading,
            price,
            description,
          }) => {
            return (
              <Card
                key={id}
                brand={heading}
                model={subheading}
                carPrice={price}
                showBridge={showBridge}
                onClick={onClick}
                activeImg={showBridge}
                description={description}
              />
            );
          }
        )}
      </List>
      <ReactPaginate
        onPageChange={onPageChange}
        pageCount={pageCount}
        forcePage={forcePage}
        previousLabel={'<'}
        nextLabel={'>'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
};
export default CardsList;


