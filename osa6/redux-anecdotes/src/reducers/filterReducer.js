const filterReducer = (state = '', action) => {
  switch (action.type) {
     
    case 'SET_FILTER':
      return action.data.filterValue

    default:
      return state
  }
}

export const filterChange = (filterValue) => { 
  return {
    type: 'SET_FILTER',
    data: { filterValue: filterValue }
  }
}

export default filterReducer