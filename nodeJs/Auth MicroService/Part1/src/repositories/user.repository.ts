import db from "../db";
import User from '../models/user.model';


//repo functions to be used in userRoute

class UserRepository{
//repository -> rules, methods : to search an modify
async findAllUsers(): Promise <User[]> { //async method needs Promise
  const query = `
  SELECT uuid, username
  FROM application_user`;

  //-> return Promise with query results 
  //destructin object
  const{ rows} = await db.query<User>(query)

  return rows || [];
}

async findById(uuid: string): Promise<User>{
  const query = `
  SELECT uuid, username
  FROM application_user
  WHERE uuid = $1` //--> FIRST PARAMETER
  const values = [uuid];
  //destructin object
  const {rows} = await db.query<User>(query,values);

  //destructing array
  const [user] = rows;

  return user;
}

//passing username, password, crypt into new user
async create(user: User): Promise<string> {
  const script = `
  INSERT INTO application_user (
    username,
    password
  )
  VALUES ($1, $2, 'my_salt)
  RETURNING uuid`;
  const values = [user.username,user.password];

  const {rows} = await db.query<{uuid: string}> (script, values);
  const [newUser ]= rows;
  return newUser.uuid;
}

//passing username, password, crypt to update specific user
async update(user: User): Promise<void> {
  const script = `
  UPDATE application_user 
    SET
    username = $1,
    password = crypt ($2, 'my_salt')
    WHERE uuid = $3`;
    
  const values = [user.username,user.password, user.uuid];

   await db.query(script, values);

}

async remove(uuid: string): Promise<void> {
  const crypt=`
    DELETE 
    FROM application_user
    WHERE uuid = $1`;

    const values = [uuid];

    await db.query(crypt, values);
}

}

export default new UserRepository();