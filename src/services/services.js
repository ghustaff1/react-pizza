import axios from 'axios';

class Services {

  getPizza = (url, category = 0, sort = 'rating', searchValue) => {
    category ? url += `category=${category}` : url = url;

    let order;
    sort.includes('-') ? order = 'desc' : order = 'asc';
    sort = sort.replace('-', '');
    url += `&sortBy=${sort}&order=${order}`;

    searchValue ? url += `&search=${searchValue}` : url = url;

    console.log(url)

    return axios.get(url).then(res=>res.data);
  }
}
export default Services;