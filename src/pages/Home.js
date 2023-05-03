import React from 'react';

import { useNavigate } from 'react-router-dom';

import qs from 'qs';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';


import Services from '../services/services';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import {  fetchPizzas } from '../redux/slices/pizzaSlice';

const Home = () => {
  const services = new Services();
  const navigate = useNavigate();

  const isMounted = React.useRef(false);

  const dispatch = useDispatch();
  const { category, sort, currentPage, searchValue } = useSelector(state => state.filter);
  const { items, status } = useSelector(state => state.pizza)

  const _pizzaDataUrl =
    `https://6446cd9b0431e885f01c4899.mockapi.io/items?page=${currentPage}&limit=4`;


  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters(params)
      );
    }
  }, []);

  React.useEffect(() => {
    getPizzas(_pizzaDataUrl);
  }, [category, sort, searchValue, currentPage]);

  const getPizzas = async (url) => {
    category ? url += `category=${category}` : url = url;

    let order;
    sort.includes('-') ? order = 'desc' : order = 'asc';

    url += `&sortBy=${sort.replace('-', '')}&order=${order}`;

    searchValue ? url += `&search=${searchValue}` : url = url;
    console.log(url)
    dispatch(fetchPizzas(url));
  }

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort,
        category,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sort, currentPage]);


  const skeletons = [...new Array(8)].map((name, i) => <Skeleton key={i} />);


  const pizzas = items.map(obj =>
    <PizzaBlock key={obj.id} {...obj} />
  )

  const content = status === 'loading' ?
    skeletons :
    status === 'success' ?
      pizzas :
      <div className='content__error-info'>
        <h2>Ошибка!!!</h2>
        <p>Возникла непредвиденная ошибка! Попробуйте немного позже </p>
      </div>;

  return (
    <div className='container'>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {content}
      </div>
      <Pagination
        currentPage={currentPage}
        onChangePage={(number) => dispatch(setCurrentPage(number))} />
    </div>
  )
}

export default Home;