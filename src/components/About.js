import Hero from "./Hero"

const About = () => {
  return (
      <>
      
      <Hero text="About us" />
      
      <div className="container">
          <div className="row ">
              <div className="col-lg-8 offset-lg-2 my-5">
                  <p className="lead">
                  Here at Movie Browser, we strive to offer Movie Buff's like yourself a place to easily search for and view your favorite movies.
                  There may be a time when you search for your favorite flick and it returns no results. Never fear, we have a fantastic team
                  that can try to locate what you are looking for. Just send us a message and gives us a little time to process and find what you seek.
                  </p>
              </div>
          </div>
      </div>
       
      </>

  )
}

export default About;