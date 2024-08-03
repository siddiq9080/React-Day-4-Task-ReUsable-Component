import propTypes from "prop-types";

const Swap = ({ type, head, content }) => {
  return (
    <div className="col-md-6">
      <div className="card border-0">
        {type === "image" ? (
          <img
            src={content}
            style={{ height: "400px", width: "100%" }}
            className="w-100"
            alt="card content"
          />
        ) : (
          <div className="card-body">
            <p className="card-text text-center" style={{ height: 350 }}>
              <div className="p-5">
                <h2 className="mt-3">{head}</h2>
                <p className="mt-4">{content}</p>
              </div>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

Swap.propTypes = {
  type: propTypes.string,
  content: propTypes.string,
  head: propTypes.string,
};

export default Swap;
