import React, { Component } from 'react'
import SchoolsTable from './schoolsTable'
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate'
import SearchBox from './searchBox'
import _ from 'lodash'

class Schools extends Component {
  state = {
    pageSize: 3,
    currentPage: 1,
    querySearch: '',
  }

  handlePageChange = (page) => this.setState({ currentPage: page })

  handleLike = (school) => {
    const schools = [...this.state.schools]
    const index = schools.indexOf(school)
    schools[index] = { ...school }
    schools[index].liked = !schools[index].liked
    this.setState({ schools })
  }

  handleSearch = (query) => this.setState({ querySearch: query })

  getPagedData() {
    const { currentPage, pageSize, querySearch } = this.state
    const { schools: allSchools, sortColumn } = this.props

    const sorted = _.orderBy(allSchools, [sortColumn.path], [sortColumn.order])
    const filtered = sorted.filter((s) =>
      s.name.toLowerCase().startsWith(querySearch.toLowerCase()),
    )
    const schools = paginate(filtered, currentPage, pageSize)
    return { filtered, schools }
  }

  render() {
    const { currentPage, pageSize, querySearch } = this.state
    const { onDelete, onSort, onStarClick, sortColumn, user } = this.props

    const { filtered, schools } = this.getPagedData()

    if (this.props.schools.length === 0)
      return <p>There are no movies in the database.</p>
    return (
      <div className="container">
        <h1 className="animate__animated animate__pulse">Offered Schools</h1>
        <div className="schools">
          <p>Showing {filtered.length} schools in the database.</p>
          <SearchBox
            className="schools__search-box"
            onChange={this.handleSearch}
            value={querySearch}
          />
          <div class="schools__table">
            <SchoolsTable
              onDelete={onDelete}
              onSort={onSort}
              sortColumn={sortColumn}
              schools={schools}
              onStar={onStarClick}
              user={user}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            itemsCount={filtered.length}
            onPageChange={this.handlePageChange}
            pageSize={pageSize}
          />
        </div>
      </div>
    )
  }
}

export default Schools
