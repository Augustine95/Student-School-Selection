import React from 'react';
import ListGroup from './common/listGroup';
import { getSchools } from '../services/fakeSchoolsService';
import { getStudents } from '../services/fakeStudentsService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import StudentListTable from './studentsListTable';

class StudentsList extends React.Component {
    state = {
        schools: [],
        students: [],
        selectedSchool: "",
        sortColumn: { path: 'name', order: 'asc', },
        pageSize: 4,
        currentPage: 1
    };

    componentDidMount() {
        const schools = [{ _id: "", name: "All Schools" }, ...getSchools()];
        this.setState({ schools, students: [...getStudents()] });
    }

    handleSchoolSelect = school => this.setState({ selectedSchool: school, currentPage: 1 });

    handleSort = sortColumn => this.setState({ sortColumn });

    handlePageChange = page => this.setState({ currentPage: page });

    getPagedData() {
        const { selectedSchool, sortColumn, students, pageSize, currentPage } = this.state;

        const filtered = selectedSchool && selectedSchool._id ? students.filter(s => s.school._id === selectedSchool._id) : students;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const paginated = paginate(sorted, currentPage, pageSize);

        return { filtered, paginated };
    }

    render() {
        const { schools, selectedSchool, sortColumn, pageSize, currentPage } = this.state;

        const { paginated, filtered } = this.getPagedData();

        return (
            <div>
                <h1>Students List</h1>
                <div className="row">
                    <div className="col-3">
                        <ListGroup
                            items={schools}
                            onItemSelect={this.handleSchoolSelect}
                            selectedItem={selectedSchool}
                        />
                    </div>
                    <div className="col">
                        <p>Showing {filtered.length} students in the database.</p>
                        <StudentListTable
                            sortColumn={sortColumn}
                            onSort={this.handleSort}
                            students={paginated}
                        />
                        <Pagination
                            itemsCount={filtered.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentsList;
