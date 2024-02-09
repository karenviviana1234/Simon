import { createPool } from "mysql2/promise";

export const pool = createPool(
    {
        host: 'localhost',
        user:'root',
        password:'',
        port: 4000,
        database:'simon'
    }
);