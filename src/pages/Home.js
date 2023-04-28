import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import Services from '../services/services';
import { SearchContext } from '../App';

import { useSelector } from 'react-redux';

const Home = () => {

  // const {searchValue}=React.useContext(SearchContext)

  const services = new Services();

  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [currentPizzaCategory, setCurrentPizzaCategory] = React.useState(0);
  const [currentPizzaSort, setCurrentPizzaSort] = React.useState('rating');
  const [currentPage, setCurrentPage]=React.useState(1);

  //Redux
  const category=useSelector(state=>state.filter.category);
  const sort=useSelector(state=>state.filter.sort);
  const searchValue=useSelector(state=>state.filter.searchValue);

  // console.log('in home ');

  // console.log('category ', category);
  //   console.log('sort ', sort);
  //   console.log('searchValue ', searchValue);



  const _pizzaDataUrl = 
  `https://6446cd9b0431e885f01c4899.mockapi.io/items?page=${currentPage}&limit=4&`;

    //React-native
  // React.useEffect(() => {
  //   services.getPizza(_pizzaDataUrl)
  //     .then(json => {
  //       setItems(json);
  //       setLoading(false);
  //     })
  // }, []);

  // React.useEffect(() => {
  //   setLoading(true);
  //   services.getPizza(_pizzaDataUrl, currentPizzaCategory, currentPizzaSort, searchValue)
  //     .then(json => {
  //       setItems(json);
  //       setLoading(false);
  //     })
  // }, [currentPizzaCategory, currentPizzaSort, searchValue, currentPage]);

    //Redux
    React.useEffect(() => {
    services.getPizza(_pizzaDataUrl)
      .then(json => {
        setItems(json);
        setLoading(false);
      })
  }, []);

  React.useEffect(() => {
    setLoading(true);
    services.getPizza(_pizzaDataUrl, category, sort, searchValue)
      .then(json => {
        setItems(json);
        setLoading(false);
      })
  }, [category, sort, searchValue, currentPage]);

  const skeletons = [...new Array(8)].map((name, i) => <Skeleton key={i} />);

  const pizzas = items.map((obj) =>
    <PizzaBlock key={obj.id} data={obj} />
  )

  return (
    <div className='container'>
      <div className="content__top">
        <Categories
          setCategory={setCurrentPizzaCategory}
          category={currentPizzaCategory} />
        <Sort
          setSort={setCurrentPizzaSort}
          sort={currentPizzaSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ?
          skeletons :
          pizzas
        }
      </div>
      <Pagination
      onChangePage={setCurrentPage}/>
    </div>
  )
}

export default Home;