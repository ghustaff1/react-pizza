import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import Services from '../services/services';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../redux/slices/filterSlice';

const Home = () => {
  const services = new Services();


  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1);

  const dispatch = useDispatch();
  const { category, sort, currentPage, searchValue } = useSelector(state => state.filter);

  const _pizzaDataUrl =
    `https://6446cd9b0431e885f01c4899.mockapi.io/items?page=${currentPage}&limit=4&`;


  React.useEffect(() => {
    setLoading(true);
    services.getPizza(_pizzaDataUrl, category, sort, searchValue)
      .then(data => {
        setItems(data);
        setLoading(false);
      })
  }, [category, sort, searchValue, currentPage]);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  }


  const skeletons = [...new Array(8)].map((name, i) => <Skeleton key={i} />);

  const pizzas = items.map((obj) =>
    <PizzaBlock key={obj.id} data={obj} />
  )

  return (
    <div className='container'>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ?
          skeletons :
          pizzas
        }
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage} />
    </div>
  )
}

export default Home;