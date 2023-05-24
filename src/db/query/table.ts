export const createRestaurantTableQuery = `
CREATE TABLE
  IF NOT EXISTS restaurants (
    id bigserial PRIMARY KEY,
    name varchar(50) NOT NULL,
    price varchar(20),
    category varchar(20),
    summary varchar(255),
    cluster varchar(20),
    longitude float,
    latitude float,
    detail text,
    "createdAt" timestamp NOT NULL default NOW(),
    "updatedAt" timestamp NOT NULL default NOW()
  );
`;
