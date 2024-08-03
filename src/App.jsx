import Banner from "./Components/BannerComponent.jsx";
import ThreeCard from "./Components/ThreeCardComponent.jsx";
import Swap from "./Components/SwappingCard.jsx";
function App() {
  return (
    <>
      {/* Big Banner */}
      <Banner head="Generate more leads with a professional landing page!" />

      {/* Three card */}

      <div className="container">
        <div className="row g-3">
          <div className="col-md-4 ">
            <ThreeCard
              image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThpMkGvqGx9k7JjxgjBvPGNPWUh5EIHwZHQeaSMNKYQfRiDD0g"
              title="Fully Responsive"
              description="This theme will look great on any device, no matter the size!"
            />
          </div>
          <div className="col-md-4 ">
            <ThreeCard
              image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSc7LwJGdxVA5FMFoirLAP0amOLqGijxX75pPN6wMoD1J9pIAN2"
              title="Bootstrap 5 Ready"
              description="Featuring the latest build of the new Bootstrap 5 framework!"
            />
          </div>
          <div className="col-md-4 ">
            <ThreeCard
              image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThpMkGvqGx9k7JjxgjBvPGNPWUh5EIHwZHQeaSMNKYQfRiDD0g"
              title="Easy to Use"
              description="Ready to use with your own content, or customize the source files!"
            />
          </div>
        </div>
      </div>

      {/* Big swapping card  */}

      <div className="container-fluid mt-5">
        <div
          className="row g-3 g-md-0"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Swap
            type="text"
            head="Fully responsive Design"
            content="When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
          />
          <Swap
            type="image"
            content="https://i.pinimg.com/736x/07/1e/5c/071e5c33c5981553e19fb2c7279882ef.jpg"
          />
          <Swap
            type="image"
            content="https://i.pinimg.com/736x/e8/d9/d2/e8d9d2b0de37798da0b0a4a1c5bee477.jpg"
          />
          <Swap
            type="text"
            head="Updated For Bootstrap "
            content="Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
          />

          <Swap
            type="text"
            head="Easy to use and Customize"
            content="Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
          />
          <Swap
            type="image"
            content="https://i.pinimg.com/736x/2e/3d/68/2e3d6845011de0d24c13dd1e1028a2ff.jpg"
          />
        </div>
      </div>

      {/* Three person Review Card */}

      <div className="container mt-5">
        <div className="row g-3 g-md-0">
          <div className="col-md-4 ">
            <ThreeCard
              image="https://i.pinimg.com/236x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg"
              title="Muhamad"
              description="Bootstrap is amazing. I've been using it to create lots of super nice landing pages"
            />
          </div>
          <div className="col-md-4 ">
            <ThreeCard
              image="https://i.pinimg.com/236x/87/fd/7f/87fd7fdc7b0e3a8b39fac38245703643.jpg"
              title="Aizu"
              description="Thanks so much for making these free resources available to us!"
            />
          </div>
          <div className="col-md-4">
            <ThreeCard
              image="https://i.pinimg.com/236x/23/96/35/239635dbd1f86d7e439bc0dbd244082f.jpg"
              title="Siddiq"
              description="This is fantastic! Thanks so much guys"
            />
          </div>
        </div>
      </div>

      {/* Bottom Banner Section */}
      <Banner head="Ready to get started? Sign up now!" />
    </>
  );
}

export default App;
