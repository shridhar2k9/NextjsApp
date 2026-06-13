import sql from 'better-sqlite3';

const db = sql('meals.db');

const getMeals= async ()=>{
    await new Promise((resolve)=>setTimeout(()=>{resolve()},5000))
    // throw new error("Gettin error while retriving Meals data");
    return db.prepare("select * from meals").all();
}

const  getMeal =  (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export { getMeals, getMeal };