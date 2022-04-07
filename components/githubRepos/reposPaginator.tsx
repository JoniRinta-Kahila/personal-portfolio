import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { IRepo } from '../../types/githubData'
import RepoCard from './repoCard'
import styles from '../../styles/reposPaginator.module.scss'
import { RepoSortStyle } from '../../types/repoSort'
import _ from 'lodash'

type ReposPaginatorProps = {
  itemsPerPage: number
  items: IRepo[]
}

type ItemsProps = {
  items: IRepo []
  sorter: RepoSortStyle
}

const Items: React.FC<ItemsProps> = ({ items, sorter }) => {
  return (
    <>
      {
        items && items.map(x => <RepoCard key={x.id} data={x} />)
      }
    </>
  )
}

const defaultSort = RepoSortStyle.recent;

const ReposPaginator: React.FC<ReposPaginatorProps> = ({ itemsPerPage, items }) => {

  const [sorter, setSorter] = useState<RepoSortStyle>(defaultSort)

  const [currentItems, setCurrentItems] = useState<IRepo[]>([]) // TODO fix type!
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const sortedItems = sortRepos(sorter)(items)
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(sortedItems.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(sortedItems.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items, sorter])

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }
  
  return (
    <>
      <div className={styles.sorters}>
        <input
          type='radio'
          value={RepoSortStyle.recent}
          name='sort'
          checked={sorter === RepoSortStyle.recent}
          onChange={() => setSorter(RepoSortStyle.recent)}
        /> Recent
        <input
          type='radio'
          value={RepoSortStyle.stars}
          name='sort'
          checked={sorter === RepoSortStyle.stars}
          onChange={() => setSorter(RepoSortStyle.stars)}
        /> Stars
        <input
          type='radio'
          value={RepoSortStyle.language}
          name='sort'
          checked={sorter === RepoSortStyle.language}
          onChange={() => setSorter(RepoSortStyle.language)}
        /> Language
      </div>
      <Items items={currentItems} sorter={sorter} />
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

function sortRepos(type: RepoSortStyle): (input: IRepo[]) => IRepo[] {  
  return input => {
    switch(type){
      case RepoSortStyle.recent:
        return _.sortBy(input, x => -new Date(x.updated_at ?? -1).getTime())
      case RepoSortStyle.stars:
        return _.sortBy(input, x => -(x.stargazers_count ?? -1))
      case RepoSortStyle.language:
        return _.sortBy(input, x => x.language)
    }
  }
}

export default ReposPaginator
