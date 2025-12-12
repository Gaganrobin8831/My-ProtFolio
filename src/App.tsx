
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  // const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Memoize theme update to prevent unnecessary re-renders
  const updateTheme = useCallback(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Apply theme on theme change
  useEffect(() => {
    updateTheme();
  }, [theme, updateTheme]);

  // Apply theme on initial mount (only once)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const root = document.documentElement;
    
    if (initialTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
