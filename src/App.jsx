import BlogCard from "./components/BlogCard/BlogCard"
import BlogPage from "./components/BlogPage/BlogPage"
import CategoriesPage from "./components/CategoriesPage/CategoriesPage"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"


const App = () => {


  return (
    <>
     <Header />
     <Hero /> 
      <BlogPage />
      <CategoriesPage />
      <Footer />
    </>
  )
}

export default App