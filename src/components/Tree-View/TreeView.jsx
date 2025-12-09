import React from 'react'
import MenuList from './MenuList'

const TreeView = ({ menus = [] }) => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4">
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView