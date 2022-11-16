import { useEffect, useState } from 'react';
import { BlogItem } from './BlogItem';
import { useBlogs } from './useBlogs';
import { useSelector, useDispatch } from 'react-redux';
import { incPage, setPage } from './redux/slice';
import { Modal } from './Modal/Modal';

export function Men() {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  useBlogs();

  return (
    <>
      <div className='main-aside'>
        {blogs.map(
          (blog) =>
            blog.for == 'men' && (
              <BlogItem
                key={blog.id}
                id={blog.id}
                price={blog.price}
                old_price={blog.old_price}
                name={blog.name}
              />
            )
        )}
      </div>
      <div className='flexd'>
        <button className='roundable' onClick={() => dispatch(incPage())}>
          Показать ещё
        </button>
      </div>
    </>
  );
}
