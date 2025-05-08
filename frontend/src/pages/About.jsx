import React from "react";

import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, hic voluptates non animi eius recusandae facere facilis
            fugit nobis incidunt, unde, nemo voluptatum! Delectus quisquam ad
            distinctio ducimus nam neque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, hic voluptates non animi eius recusandae facere facilis
            fugit nobis incidunt, unde, nemo voluptatum! Delectus quisquam ad
            distinctio ducimus nam neque!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id
            deleniti iusto consectetur rem sunt architecto eveniet sit
            perferendis quod! Ipsum distinctio commodi asperiores! Porro
            reprehenderit vel et nesciunt reiciendis?
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
    </div>
  );
};

export default About;
