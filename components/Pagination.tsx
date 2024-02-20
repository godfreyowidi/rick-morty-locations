import { Info } from '../locations/useGetLocations';

type PaginationProps = {
  info: Info;
  currentPage: number;
  onClick: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ info, currentPage, onClick }) => {
  return (
    <div className="flex mt-5 justify-center">
      <div
        key="pagination_item_prev"
        className={`pagination-item ${!info.prev ? ' disabled' : ''}`}
        onClick={() => info.prev && onClick(info.prev)}
      >
        &#60;
      </div>
      {Array.from({ length: info.pages || 0 }, (_, i) => i + 1).map((page) => (
        <div
          key={`pagination_item_${page}`}
          className={`pagination-item ${currentPage === page ? ' active' : ''}`}
          onClick={() => onClick(page)}
        >
          {page}
        </div>
      ))}
      <div
        key="pagination_item_next"
        className={`pagination-item ${!info.next ? ' disabled' : ''}`}
        onClick={() => info.next && onClick(info.next)}
      >
        &#62;
      </div>
    </div>
  );
};

export default Pagination;