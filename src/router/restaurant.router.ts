import { Request, Response } from 'express';
import { getRestaurantById } from '../service/restaurant.service';
import { app } from '../app';

app.get('/restaurant/:id', (req: Request, res: Response) => {
  const restaurant = getRestaurantById(+req.params.id);
  res.status(200).send(restaurant);
});