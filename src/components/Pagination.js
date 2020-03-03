import React, { useRef } from 'react'

const Pagination = (
  {
    page,
    pageCount,
    onPageChange,
    ...rest
  }) => {


  const isEnd = page === pageCount
  const isFist = page === 1
  const nextPage = isEnd ? pageCount : page + 1
  const prevPage = isFist ? 1 : page - 1

  return (
    <div {...rest}>
      {!isFist ?
        <button onClick={() => { onPageChange(prevPage) }}>{'<'}</button> : null
      }
      <span >{page}</span>
      {!isEnd ?
        <button onClick={() => { onPageChange(nextPage) }}>{'>'}</button> : null}
    </div>
  )
}

export default Pagination

