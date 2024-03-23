

const usePagination = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    return {
        currentPageData: items.slice(startIndex, endIndex),
        totalPages,
    };
};

export default usePagination;
