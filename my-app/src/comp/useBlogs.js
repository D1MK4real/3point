import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ajaxService } from './ajaxService';
import { setBlogsMore,setBlogs } from './redux/slice';

export function useBlogs() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.blogs.page);

  useEffect(() => {
    ajaxService(`/sale?_page=${page}`).then((data)=>{
        if(page===1){
            dispatch(setBlogs(data));
        }else{
            dispatch(setBlogsMore(data));
        }
    });
  }, [page]);
}