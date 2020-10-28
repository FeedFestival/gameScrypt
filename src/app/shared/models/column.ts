export interface IColumn {
    field?: string;
    header?: string;
    splitHeader?: string[];
    style?: any;
    headerStyle?: any;
    class?: string;
    filterClass?: string;
    sortable?: boolean;
    filterable?: boolean;
    sortableKey?: string;
    hasTooltip?: boolean;
    tooltip?: string;
    filterLabel?: string;
}
