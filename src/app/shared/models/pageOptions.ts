export class PageOptions {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageNumber: number;
    pageSize: number;
    sortingCriteria: string;
    totalNumberOfPages: number;
    totalNumberOfRecords: number;
    showPaginator: boolean;
    searchPerformed = false;
    unfilteredCount?: number;
    showPaginatorInfo: boolean;
    doCheckSummary: boolean;
    doCheckPagination: boolean;
    noSearchText = 'No search was performed.';
    first: number;

    constructor(pageSize?) {    // TODO: remove the ? to see where it errors
        this.pageSize = pageSize;
        this.first = 0;
        this.reset();
    }

    reset() {
        this.showPaginator = false;
        this.searchPerformed = false;
        this.totalNumberOfRecords = 0;
        this.unfilteredCount = undefined;
    }

    setupPaging(newPaging?) {
        this.searchPerformed = newPaging ? true : false;
        this.hasNextPage = newPaging ? newPaging.hasNextPage : false;
        this.hasPreviousPage = newPaging ? newPaging.hasPreviousPage : false;
        this.pageNumber = newPaging ? newPaging.pageNumber : 1;
        this.pageSize = newPaging ? newPaging.pageSize : 0;
        this.sortingCriteria = newPaging ? newPaging.sortingCriteria : null;
        this.totalNumberOfPages = newPaging ? newPaging.totalNumberOfPages : 0;
        this.totalNumberOfRecords = newPaging ? newPaging.totalNumberOfRecords : 0;
        this.checkPaginator();
    }

    setupPagingByFilter(filter) {
        this.searchPerformed = true;
        this.totalNumberOfRecords = filter.filterCount;
        this.unfilteredCount = filter.totalCount;
        this.checkPaginator();
    }

    setupPagingByCount(count) {
        this.searchPerformed = true;
        this.totalNumberOfRecords = count;
        this.checkPaginator();
    }

    private checkPaginator() {
        if (this.totalNumberOfRecords > 0) {
            this.showPaginator = true;
            if (this.totalNumberOfRecords <= this.pageSize) {
                this.showPaginatorInfo = true;
            } else {
                this.showPaginatorInfo = false;
            }
        } else {
            this.showPaginator = false;
        }

        this.doCheckSummary = true;
        this.doCheckPagination = true;
    }
}
