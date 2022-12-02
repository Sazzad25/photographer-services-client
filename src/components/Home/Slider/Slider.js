import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-10"
        style={{ backgroundImage: `url("https://media.istockphoto.com/id/1387494553/photo/mirrorless-camera-on-tripod-standing-in-autumn-forest-with-mount-assiniboine-in-national-park.jpg?b=1&s=170667a&w=0&k=20&c=ySTgIIzko0ZUxxO85RhQBkl5cUDon2yWSWRWmVz08x4=")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
                        Photographer <br />
                        Stylish <br />
                        Servicing
            </h1>
            <p className="mb-5">
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
