'use client'

import {useRouter} from 'next/navigation'
import {useState} from 'react'
import styles from './styles.module.css'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const onSubmit = (event: any) => {
    if (!keyword) {
      event.preventDefault()
    } else {
      event.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  const onClick = (event: any) => {
    if (!keyword) {
      event.preventDefault()
    } else {
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex">
        <input
          className={`${styles.search} form-control me-2`}
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button
          className={`${styles.btn} ${styles.btn_outline_purple}`}
          type="button"
          onClick={onClick}
        >
          <i className="fa fa-search" aria-hidden />
        </button>
      </div>
    </form>
  )
}
