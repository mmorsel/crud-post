import {   useRoutes } from "react-router-dom";
import { router } from "./app/routes";
import { Suspense } from "react";

const App = () => {
  const routes = useRoutes(router)

  return (
      <Suspense fallback={<>Загрузка...</>}>{routes}</Suspense>
  ) 
  
}

export default App;
