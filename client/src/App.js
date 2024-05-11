import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react';

// main login signup page imports
import Signup from './components/Signup/index';
import Login from './components/Login/index';
// home pages and the navbar
import Main from './components/Main/index';
import Main2 from './components/Main/index2';
import Navbar from './components/Navbar/Navbar';

// the dietlibrary menu and home page
import Dl_Navbar from './components/DietLibrary/DietLib_Navbar/Dl_Navbar';
import Dl_Homepage from './components/DietLibrary/DietLib_Navbar/Dl_Navdata';
// the foodlibrary menu and home page
import Food_Data from './components/Food_Library/Food_Data';
import Food_Nav from './components/Food_Library/Food_Nav';


// import of page 2
import LowDiet from './components/DietLibrary/Pages/LowDiet';
import KetoDiet from './components/DietLibrary/Pages/KetoDiet';
import HighProtein from './components/DietLibrary/Pages/HighProtein';
import LowFatdiet from './components/DietLibrary/Pages/LowFatdiet';
import VeganDiet from './components/DietLibrary/Pages/VeganDiet';
import Vegetarian from './components/DietLibrary/Pages/Vegetarian';
import Three from './components/DietLibrary/Pages/Three';


// import of page 3
import FoodNutrition from './components/Food_Library/Pages/FoodNutrition';
import DietPlanner from './components/Food_Library/Pages/DietPlanner';
import DietPlanGenerator from './components/Food_Library/Pages/DietPlanGenerator';
import Howto from './components/Food_Library/Pages/Howto';
import CalorieTracker from './components/Food_Library/Pages/CalorieTracker';
import Getcalorie from './components/Food_Library/Pages/Getcalorie';
import RecipeSearch from './components/Food_Library/Pages/RecipeSearch';


// the other imports
import ExerciseLibrary from './components/ExerciseLibrary/ExerciseLibrary';
import ExerciseNav from './components/ExerciseLibrary/ExerciseNav';

import Feedback from './components/Feedback/Feedback';
import FeedbackNav from './components/Feedback/FeedbackNav';


import SymptomForm from './components/Symptom/SymptomForm';

import Profile from './components/Profile/Profile';
import ProfileNav from './components/Profile/ProfileNav';



// import jwt from 'jsonwebtoken';
 const App = () => {

  const user = localStorage.getItem('token');
  // const decodedtoken = jwt.decode(user)
  // const userId = decodedtoken ? decodedtoken.userId : null

  return (
    // <div>App</div>
    <>
      {
        console.log(user)}

      {/* { */}
      {/* console.log(userId) */}
      {/* } */}

      <div className='thishasroutes'>
        {user && <Navbar />}
        {/* <Routes>
          {user && <Route path="/" exact element={<Navbar />} />}
        </Routes> */}
        <Grid templateColumns="repeat(6,1fr)" bg="white">

          {/* for the left side navbar pink navbar */}
          <GridItem
            as="main"
            colSpan={{ base: 6, lg: 2, xl: 1 }}
            bg="purple.400"
            minHeight={{ base: "20vh", lg: '40vh', xl: "100vh" }}
            p={{ base: "3rem 3rem 0rem 3rem ", lg: "5rem 0rem 4rem 4rem", xl: "2rem" }}
            width="100%"
          >
            <Routes>
              {user && <Route path="/" exact element={<Main2 />} />}

              {/* OTHER ROUTES */}
              {/* DIET LIBRARY */}
              {user && <Route exact path="/DietLibrary" element={<Dl_Navbar />} />}
              {/* INSIDERS */}
              {user && <Route exact path="/DietLibrary/LowDiet" element={<Dl_Navbar />} />}
              {user && <Route exact path="/DietLibrary/KetoDiet" element={<Dl_Navbar />} />}
              {user && <Route exact path="/DietLibrary/HighProtein" element={<Dl_Navbar />} />}
              {user && <Route exact path="/DietLibrary/LowFatdiet" element={<Dl_Navbar />} />}
              {user && <Route exact path="/DietLibrary/VeganDiet" element={<Dl_Navbar />} />}
              {user && <Route exact path="/DietLibrary/Vegetarian" element={<Dl_Navbar />} />}
              {user && <Route exact path="/DietLibrary/Three" element={<Dl_Navbar />} />}

              {/* FOOD LIBRARY */}
              {user && <Route exact path="/FoodLibrary" element={<Food_Nav />} />}
              {/* INSIDERS */}
              {user && <Route exact path="/FoodLibrary/Howto" element={<Food_Nav />} />}
              {user && <Route exact path="/FoodLibrary/FoodNutrition" element={<Food_Nav />} />}
              {user && <Route exact path="/FoodLibrary/DietPlanner" element={<Food_Nav />} />}
              {user && <Route exact path="/FoodLibrary/DietPlanGenerator" element={<Food_Nav />} />}
              {user && <Route exact path="/FoodLibrary/RecipeSearch" element={<Food_Nav />} />}
              {user && <Route exact path="/FoodLibrary/CalorieTracker" element={<Food_Nav />} />}
              {user && <Route exact path="/FoodLibrary/GetCalories" element={<Food_Nav />} />}

              {/* EXERCISE PAGE */}
              {user && <Route exact path='/ExerciseLibrary/ExerciseLibrary' element={<ExerciseNav />} />}

              {/* FEEDBACK PAGE */}
              {user && <Route exact path='/Feedback/Feedback' element={<FeedbackNav />} />}

              {/* PROFILE PAGE */}
              {user && <Route exact path='/Profile/Profile' element={<ProfileNav />} />}

            </Routes>

          </GridItem>


          {/* the white portion */}
          <GridItem
            as="main"
            colSpan={{ base: 6, lg: 4, xl: 5 }}
            p="3rem"
            width="100%"
          >
            <Routes>.
              {/* this was the homepage and signup and login routes */}
              {user && <Route path="/" exact element={<Main />} />}
              <Route path="/signup" exact element={<Signup />} />
              <Route path="/login" exact element={<Login />} />
              <Route exact path='/' element={<Navigate replace to="/login" />} />

              {/* OTHER ROUTES */}
              {/* DIET LIBRARY */}
              {user && <Route exact path="/DietLibrary" element={<Dl_Homepage />} />}
              <Route exact path='/DietLibrary' element={<Navigate replace to="/login" />} />
              {/* INSIDERS */}
              {user && <Route exact path="/DietLibrary/LowDiet" element={<LowDiet />} />}
              <Route exact path='/DietLibrary/LowDiet' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/DietLibrary/KetoDiet" element={<KetoDiet />} />}
              <Route exact path='/DietLibrary/KetoDiet' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/DietLibrary/HighProtein" element={<HighProtein />} />}
              <Route exact path='/DietLibrary/HighProtein' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/DietLibrary/LowFatdiet" element={<LowFatdiet />} />}
              <Route exact path='/DietLibrary/LowFatdiet' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/DietLibrary/VeganDiet" element={<VeganDiet />} />}
              <Route exact path='/DietLibrary/VeganDiet' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/DietLibrary/Vegetarian" element={<Vegetarian />} />}
              <Route exact path='/DietLibrary/Vegetarian' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/DietLibrary/Three" element={<Three />} />}
              <Route exact path='/DietLibrary/Three' element={<Navigate replace to="/login" />} />

              {/* FOOD LIBRARY */}
              {user && <Route exact path="/FoodLibrary" element={<Food_Data />} />}
              <Route exact path='/FoodLibrary' element={<Navigate replace to="/login" />} />
              {/* INSIDERS */}
              {user && <Route exact path="/FoodLibrary/Howto" element={<Howto />} />}
              <Route exact path='/FoodLibrary/Howto' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/FoodLibrary/FoodNutrition" element={<FoodNutrition />} />}
              <Route exact path='/FoodLibrary/FoodNutrition' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/FoodLibrary/DietPlanner" element={<DietPlanner />} />}
              <Route exact path='/FoodLibrary/DietPlanner' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/FoodLibrary/DietPlanGenerator" element={<DietPlanGenerator />} />}
              <Route exact path='/FoodLibrary/DietPlanGenerator' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/FoodLibrary/RecipeSearch" element={<RecipeSearch />} />}
              <Route exact path='/FoodLibrary/RecipeSearch' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/FoodLibrary/CalorieTracker" element={<CalorieTracker />} />}
              <Route exact path='/FoodLibrary/CalorieTracker' element={<Navigate replace to="/login" />} />
              {user && <Route exact path="/FoodLibrary/Getcalories" element={<Getcalorie />} />}
              <Route exact path='/FoodLibrary/Getcalories' element={<Navigate replace to="/login" />} />

              {/* EXERCISE PAGE */}
              {user && < Route exact path='/ExerciseLibrary/ExerciseLibrary' element={<ExerciseLibrary />} />}
              <Route exact path='/ExerciseLibrary/ExerciseLibrary' element={<Navigate replace to="/login" />} />

              {/* FEEDBACK */}
              {user && <Route exact path='/Feedback/Feedback' element={<Feedback />} />}
              <Route exact path='/Feedback/Feedback' element={<Navigate replace to="/login" />} />

              {/* SYMPTOM PAGE */}
              {user && <Route exact path='/SymptomPrediction/SymptomPrediction' element={<SymptomForm />} />}
              <Route exact path='/SymptomPrediction/SymptomPrediction' element={<Navigate replace to="/login" />} />

              {/* PROFILE PAGE */}
              {user && <Route exact path='/Profile/Profile' element={<Profile />} />}
              <Route exact path='/Profile/Profile' element={<Navigate replace to="/login" />} />


            </Routes>

          </GridItem>
        </Grid>
      </div>

    </>
  )
}

export default App