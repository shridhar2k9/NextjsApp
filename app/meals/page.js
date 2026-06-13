import Link from "next/link";
import classes from './pages.module.css';
import MealsGrid from '../components/meals/meals-grid';
import {getMeals} from '../lib/meals';
import { Suspense } from "react";

const Grid = async () =>{
    const meals = await getMeals();

    return <MealsGrid meals={meals}></MealsGrid>

}

const Meals = () => {
    return (
       <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created.
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                    Share Your Favorite Recipe
                    </Link>
                </p>
            </header>

            <main className={classes.main}>
                <Suspense fallback={<h1 className={classes.loading}>Loading Meals...</h1>}>
                    <Grid/>
                </Suspense>
            </main>
       </>
    )
}

export default Meals;