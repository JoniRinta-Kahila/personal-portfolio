import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IRepo } from '../../types/githubData'
import RepoCard from './repoCard'

type ReposPaginatorProps = {
  itemsPerPage: number
  items: IRepo[]
}

type ItemsProps = {
  items: IRepo []
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <>
      {
        items && items.map(x => <RepoCard key={x.id} data={x} />)
      }
    </>
  )
}

const ReposPaginator: React.FC<ReposPaginatorProps> = ({ itemsPerPage, items }) => {

  const [currentItems, setCurrentItems] = useState<IRepo[]>([]) // TODO fix type!
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items])

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }
  
  return (
    <>
      <Items items={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={undefined}
      />
    </>
  )
}

export default ReposPaginator
