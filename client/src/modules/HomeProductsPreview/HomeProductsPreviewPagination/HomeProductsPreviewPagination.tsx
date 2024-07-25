import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import styles from '../HomeProductsPreview.module.css';
import { useState } from 'react';
import PaginationRendering from './PaginationRendering';

const HomeProductsPreviewPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 9;
    const countProducts = 100;
    const totalPages = Math.ceil(countProducts / limit);
    const showLastPages = totalPages - currentPage <= 4;

    return (
        <div className={styles.pagination}>
            <Pagination>
                <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                    )}

                    {PaginationRendering(totalPages, currentPage, (i) =>
                        setCurrentPage(i)
                    )}

                    {!showLastPages && (
                        <PaginationItem
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            <PaginationNext href="#" />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default HomeProductsPreviewPagination;
