class Services {


  getPizza = (url, category = 0, sort='rating') => {
    category ? url += `?category=${category}` : url += '?';
    let order;
    sort.includes('-')?order='desc':order='asc';
    sort=sort.replace('-', '');

    url+=`&sortBy=${sort}&order=${order}`;

    return fetch(url).then(data => data.json());
  }
}
export default Services;