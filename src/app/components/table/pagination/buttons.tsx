import ChevronLeftIcon from "../../icons/chevron-left";
import ChevronRightIcon from "../../icons/chevron-right";
import { PaginationType } from "../@types/pagination";
import { DOTS, usePagination } from "./hooks";

const PaginationButton: React.FC<
  {
    onPageChange: (_: number) => void;
  } & PaginationType
> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  if (!paginationRange) return <></>;

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="inline-flex rounded-[4px] border-2 border-dark-light">
      <Button onClick={onPrevious} disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <Button key={i} disabled>
              {pageNumber}
            </Button>
          );
        }

        return (
          <Button
            key={i}
            onClick={() => onPageChange(Number(pageNumber))}
            active={pageNumber === currentPage ? "1" : "0"}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button onClick={onNext} disabled={currentPage === lastPage}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  active?: string;
}
const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`${props.className} ${
        props.active === "1" ? "bg-gray-200" : "text-dark-light"
      } flex h-[33px] w-[33px] flex-grow items-center justify-center border-l-2 border-dark-light first:border-0 md:h-[40px] md:w-[40px]`}
    >
      {props.children}
    </button>
  );
};

export default PaginationButton;
