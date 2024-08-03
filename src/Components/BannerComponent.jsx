import propTypes from "prop-types";

const Banner = ({ head }) => {
  return (
    <div
      className="container-fluid p-5 mt-4"
      style={{
        margin: "0 auto",
        backgroundImage:
          "url(https://i.pinimg.com/564x/0b/79/08/0b7908a98a252963a4047c95cffd52ce.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="text-center text-white m-5"
        style={{
          width: "40%",
        }}
      >
        <h1>{head}</h1>
        <form action="" className="mt-3">
          <input
            type="email"
            className="border-0 p-3 w-75 me-2 rounded-3"
            placeholder="Email Address"
          />
          <button className="btn btn-primary p-3 rounded-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

Banner.propTypes = {
  head: propTypes.string,
};

export default Banner;
