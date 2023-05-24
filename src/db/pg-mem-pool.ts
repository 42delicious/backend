import { DataType, newDb } from 'pg-mem';
import { createRestaurantTableQuery } from './query/table';

const db = newDb();

export function getPgMem() {
  db.public.registerFunction(
    {
      name: 'exists',
      args: [DataType.bigint],
      returns: DataType.bool,
      implementation: (x) => !!x,
      allowNullArguments: true,
    },
    true
  );

  db.public.none(createRestaurantTableQuery);

  const { Pool } = db.adapters.createPg();

  const pool = new Pool();

  const backup = db.backup();

  return { pool, backup };
}
