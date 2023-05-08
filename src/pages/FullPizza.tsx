import React from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const FullPizza: React.FC = () => {

  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get('https://6446cd9b0431e885f01c4899.mockapi.io/items/' + id);
        console.log(data);
        setPizza(data);
      } catch (error) {
        alert('Произошла ошибка, поробуйте позже...');
        navigate('/');
      }
    }

    fetchPizza();
  }, [])

  if (!pizza) {
    return <>'Загрузка...'</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza img" />
      <h2>{pizza.title}</h2>
      <h2>{pizza.price} грн.</h2>
    </div>
  )
}

export default FullPizza;
