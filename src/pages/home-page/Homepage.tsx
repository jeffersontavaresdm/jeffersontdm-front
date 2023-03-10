import React from "react";
import ContactsPage from "./ContactsPage";
import SkillPage from "./SkillPage";
import AboutPage from "./AboutPage";

const imagesPath = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_IMAGES_PATH_PRD
  : import.meta.env.VITE_IMAGES_PATH_DEV

const Homepage = () => {
  const aboutRef = React.useRef<HTMLSpanElement>(HTMLSpanElement.prototype)
  const skillsRef = React.useRef<HTMLSpanElement>(HTMLSpanElement.prototype)
  const contactsRef = React.useRef<HTMLSpanElement>(HTMLSpanElement.prototype)
  const [page, setPage] = React.useState<string>("about")

  const handlePage = () => {
    switch (page) {
      case "about":
        return <AboutPage setPage={ setPage } imagesPath={ imagesPath } />
      case "skills":
        return <SkillPage setPage={ setPage } />
      case "contacts":
        return <ContactsPage imagesPath={ imagesPath } />
    }
  }

  const clearRefs = () => {
    aboutRef.current!!.style.textDecoration = "none"
    skillsRef.current!!.style.textDecoration = "none"
    contactsRef.current!!.style.textDecoration = "none"

    aboutRef.current!!.style.fontWeight = "normal"
    skillsRef.current!!.style.fontWeight = "normal"
    contactsRef.current!!.style.fontWeight = "normal"
  }

  React.useEffect(() => {
    clearRefs()
    switch (page) {
      case "about":
        aboutRef.current!!.style.textDecoration = "underline"
        aboutRef.current!!.style.fontWeight = "bold"
        break;
      case "skills":
        skillsRef.current!!.style.textDecoration = "underline"
        skillsRef.current!!.style.fontWeight = "bold"
        break;
      case "contacts":
        contactsRef.current!!.style.textDecoration = "underline"
        contactsRef.current!!.style.fontWeight = "bold"
        break;
    }
  }, [page])

  return (
    <div id={ "main-div" } >
      <div id={ "header-div" } >
        <div id={ "header-img_name" } onClick={ () => window.location.href = "/" } >
          <img id={ "icon-img" } src={ `${ imagesPath }/radar.svg` } alt={ "img01" } />
          <span id={ "header-name" } >Jefferson Tavares</span >
        </div >
        <div id={ "header-features" } >
          <span ref={ aboutRef } id={ "header-about" } onClick={ () => setPage("about") } >Sobre</span >
          <span ref={ skillsRef } id={ "header-skills" } onClick={ () => setPage("skills") } >Habilidades</span >
          <span ref={ contactsRef } id={ "header-contact" } onClick={ () => setPage("contacts") } >Contatos</span >
        </div >
      </div >
      { handlePage() }
    </div >
  );
}

export default Homepage;