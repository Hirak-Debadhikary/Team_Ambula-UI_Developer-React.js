import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content text-center ">
        <div className="max-w-lg ">
          <h1 className="text-5xl font-bold ">About Us</h1>
          <div className="border w-auto text-xl p-6 text-start">
            Welcome to our React application, where simplicity meets
            productivity. Our app combines the power of a versatile to-do list
            and a convenient shopping cart, all in one place. With a clean and
            intuitive interface, you can effortlessly manage your tasks and stay
            organized, while also streamlining your shopping experience. Whether
            you're a busy professional juggling multiple projects or a proactive
            shopper planning your next grocery trip, our app is here to simplify
            your life. Say goodbye to scattered notes and overwhelming shopping
            lists, and say hello to a seamless and efficient way of staying on
            top of your to-dos and purchases. Start using our React application
            today and experience the ease and productivity it brings to your
            daily routine.
          </div>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
