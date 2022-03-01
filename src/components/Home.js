import Hero from "./Hero";

const Home = () => {
  return (
    
    <>
      <Hero text="Welcome to the Webs #1 Movie Browser" />
      
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            
              <div class="card-group">
                <div class="card">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/izIMqapegdEZj0YVDyFATPR8adh.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Kneel to no one.</h5>
                    <p class="card-text">
                      In this sequel to "Vikings," a hundred years have passed
                      and a new generation of legendary heroes arises to forge
                      its own destiny — and make history.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Remember this feeling.</h5>
                    <p class="card-text">
                    A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.
                    </p>
                   
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">The face of madness returns.</h5>
                    <p class="card-text">
                    In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin
                    </p>
                   
                  </div>
                </div>
                <div class="card">
                  <img
                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Go for the ultimate spin.</h5>
                    <p class="card-text">
                    After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.
                    </p>
                    
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
