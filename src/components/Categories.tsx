import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';

const Categories: React.FC = () => {

  const category = useSelector((state: any) => state.filter.category);
  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            className={i === category ? 'active' : ''}
            onClick={() => dispatch(setCategory(i))}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
