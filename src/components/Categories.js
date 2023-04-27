import React from 'react';

function Categories({setCategory, category}) {
  // const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onChangeCategory = (i) => {
    // setActiveIndex(i);
    setCategory(i);
  };


  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            className={i === category ? 'active' : ''}
            onClick={() => onChangeCategory(i)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
