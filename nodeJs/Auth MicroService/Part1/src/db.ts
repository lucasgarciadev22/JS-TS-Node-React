import { Pool } from "pg";

const connectionString = "postgres://ojasacvi:GDAEWSgGKAdTq_NJp0WDpBA5SQUsSq8d@motty.db.elephantsql.com/ojasacvi";

const db = new Pool({connectionString});

export default db;
