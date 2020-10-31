import React from 'react'

const CategoryContext = React.createContext({
  category: '',
  selectCategory: (category): void => category
})

export default CategoryContext
