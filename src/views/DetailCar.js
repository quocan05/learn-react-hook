const DetailCar = ({ car, imageSize = 200 }) => {
  return (
    <div>
      <section className="profile">
        <h2>{car.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(car.imageId)}
          alt={car.altNameImage}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Type:</b> {car.type}
          </li>
          <li>
            <b>Generation: {car.generation.length} </b> (
            {car.generation.join(", ")})
          </li>
          <li>
            <b>Brand: </b>
            {car.brand}
          </li>
        </ul>
      </section>
    </div>
  );
};

const getImageUrl = (id) => {
  console.log("https://i.imgur.com/" + id + ".jpg");
  return "https://i.imgur.com/" + id + ".jpg";
};

export default DetailCar;
