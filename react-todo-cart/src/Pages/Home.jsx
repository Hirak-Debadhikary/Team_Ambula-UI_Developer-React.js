import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Welcome to our React application!
          </h1>
          <p className="py-6">
            This app serves as a convenient and user-friendly tool that combines
            the functionalities of a simple to-do list and a shopping cart.
            Whether you need to organize your tasks or keep track of your
            shopping items, this app has got you covered. With our intuitive
            interface and smooth user experience, managing your to-do list and
            shopping cart has never been easier. Stay organized by adding,
            editing, and checking off tasks on your to-do list. Additionally,
            you can effortlessly add items to your shopping cart, update
            quantities, and remove items as needed. Our React application is
            designed to streamline your productivity and enhance your shopping
            experience. Whether you're a busy professional, a student with
            assignments to tackle, or a diligent shopper, this app provides a
            seamless solution to stay organized and on top of your tasks and
            purchases. Experience the simplicity and efficiency of our React app
            as you effortlessly manage your to-do list and shopping cart. Start
            organizing your tasks and shopping items with ease today!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
