import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./components/ProjectDetails";
import AdminPanel from "./pages/AdminPanel";
import { useStateValue } from "./StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase/FirebaseConfig";
import Cart from "./pages/Cart";
import ProjectPageCat from "./components/ProjectPageCat";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user login in .
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user log out
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log(user);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/admin-panel">
          <AdminPanel />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/Projects/:projId">
          <ProjectDetails />
        </Route>
        <Route path="/product/:catParam">
          <ProjectPageCat />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
