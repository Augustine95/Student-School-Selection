import React from 'react';
import Table from './common/table';

class StudentListTable extends React.Component {
    render() {
        const { sortColumn, onSort, students } = this.props;

        const columns = [
            { path: 'name', label: 'Name' },
            { path: "meanScore", label: "Score" },
            { path: 'school.name', label: 'School' }
        ];

        return (
            <Table
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={students}
            />
        );
    }
}

export default StudentListTable;