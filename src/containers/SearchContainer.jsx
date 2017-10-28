import React from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import {
  initTableContent,
  getTableContent,
  clearTableContent
} from '../actions/TableContentActions'
import { initSearch } from '../actions/SearchActions'

const SearchContainer = props => <Search {...props} />

const mapStateToProps = state => ({
  topics: state.tableContent.topics,
  supervisors: state.tableContent.supervisors,
  search: state.search,
  tableContent: state.tableContent
})

export default connect(mapStateToProps, {
  initTableContent,
  getTableContent,
  clearTableContent,
  initSearch
})(SearchContainer)
