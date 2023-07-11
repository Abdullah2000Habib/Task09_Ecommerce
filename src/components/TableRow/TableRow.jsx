import React from 'react';
import { TableRowDatProperty, TableRowDataValue, TableRowWrapper } from './style';

const TableRow = ({property,value}) => {
    return (
        <TableRowWrapper>
            <TableRowDatProperty>{property}</TableRowDatProperty>
            <TableRowDataValue>{value}</TableRowDataValue>
        </TableRowWrapper>
    );
}

export default TableRow;
