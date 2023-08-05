import React from 'react'

export const Pagination = ({handlePagination, page, totalPages}) => {
  return (
    <div>
    <button disabled={page==1} onClick={()=>handlePagination(-1)} >Decrement</button>
    <button >{page}</button>
    <button disabled={page==Math.ceil(totalPages/3)} onClick={()=>handlePagination(+1)}>Increment</button>
    </div>
  )
}
