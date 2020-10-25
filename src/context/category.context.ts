import React from 'react'

const CategoryContext = React.createContext({
  category: '',
  selectCategory: (category) => {},
})

export default CategoryContext
