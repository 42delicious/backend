import { Request, Response } from 'express';
import { getAllRestaurants, getRestaurantById } from '../service/restaurant.service';
import { app } from '../app';

app.get('/restaurant/:id', (req: Request, res: Response) => {
  const restaurant = getRestaurantById(+req.params.id);
  res.status(200).send(restaurant);
});

app.get('/restaurants/', async (req: Request, res: Response) => {
  const cluster = req.query.cluster as string;
  let restaurants;
  if (cluster === 'gaepo' || cluster === 'seocho') {
    restaurants = await getAllRestaurants(cluster);
  } else {
    restaurants = await getAllRestaurants(null);
  res.status(200).send(restaurants);
  }
});