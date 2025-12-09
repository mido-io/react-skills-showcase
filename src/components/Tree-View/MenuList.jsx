import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ list = [] }) => {
  return (
    <ul className="list-none m-0 p-0">
      {list && list.length > 0 ? (
        list.map((listItem, index) => <MenuItem key={index} item={listItem} />)
      ) : null}
    </ul>
  )
}

export default MenuList