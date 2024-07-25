import { PaginationItem, PaginationLink } from '@/components/ui/pagination';
import styles from '../HomeProductsPreview.module.css';

type TypeOnPagination = (index: number) => void;

const PaginationRendering = (
    totalPages: number,
    currentPage: number,
    onPagination: TypeOnPagination
) => {
    const showLastPages = totalPages - currentPage <= 4;
    const pageNumbers = [];

    if (showLastPages) {
        for (let i = totalPages - 3; i <= totalPages; i++) {
            pageNumbers.push(
                <PaginationItem
                    className={
                        i === currentPage ? styles.paginationActive : undefined
                    }
                    key={i}
                >
                    <PaginationLink onClick={() => onPagination(i)} href="#">
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
    } else {
        for (
            let i = currentPage;
            i <= Math.min(currentPage + 3, totalPages);
            i++
        ) {
            pageNumbers.push(
                <PaginationItem
                    className={
                        i === currentPage ? styles.paginationActive : undefined
                    }
                    key={i}
                >
                    <PaginationLink onClick={() => onPagination(i)} href="#">
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }
    }

    return pageNumbers;
};

export default PaginationRendering;
