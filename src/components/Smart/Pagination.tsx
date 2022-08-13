import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getPageCount, createPages } from '../../utils/page';
import '../../style/components/Smart/Pagination.css'

const Pagination: React.FC = () => {
    const {page, limit} = useTypedSelector(state => state.pizza)
    const {setTodoPage} = useActions()
    const pagesCount = getPageCount(10, limit)
    const pages: number[] = []; 
    createPages(pages, pagesCount, 10)

    const numberNext = (prev = 1) => prev + 1;
    const numberExit = (prev = n) => prev - 1;
    
    const n = numberNext()
    const e = numberExit()
    
    const nextPage = () => {
        (setTodoPage(n))
    }
    const exitPage = () => {
        (setTodoPage(e))
    }

      return (
        <div className='container_xlarge'>
                <button className='xlarge-button pagination_static' onClick={() => exitPage()}>&lt;</button>
                <ul>
                {pages.map(p =>
                    <li
                        key={p} 
                        onClick={() => setTodoPage(p)}
                        className={ p === page ? "pagination_active" : "pagination_static"}
                    >
                        {p}
                    </li>
                )}
                </ul>
                <button className='xlarge-button pagination_static' onClick={() => nextPage()}>&gt;</button>
            </div>
  )
}
export default Pagination;