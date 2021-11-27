import React from 'react';

const Paginator = (props) => (
  <ul className="paginator">
    { props.numberOfPages &&
      props.numberOfPages.map(page => (
        (
          <li 
            key={page}
            className={page === props.currentPage ? "current-page paginator-item" : "paginator-item"}
            onClick={() => props.onPageChange(page)}
            >{page + 1}
          </li>
        )
      ))
    }
  </ul>
)

export default Paginator;