import React, { useState } from "react";

export default function About() {
  const toggleDarkMode = () => {
    if (color.color == "white") {
      console.log("Disable dark Mode");
      setColor({
        backgroundColor: "white",
        color: "black",
      });
      setText("Enable");
    } else {
      console.log("Enable dark Mode");

      setColor({
        backgroundColor: "black",
        color: "white",
      });
      setText("Disable");
    }
  };
  const [text, setText] = useState("Enable");
  const [color, setColor] = useState({
    backgroundColor: "white",
    color: "black",
  });

  return (
    <div className="container" style={color}>
      <h1>About Us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        voluptatibus, harum voluptates dignissimos facilis animi vel quia,
        quidem asperiores reiciendis pariatur laudantium, quae quaerat
        distinctio. Ad amet, eum quis cumque laboriosam nam autem qui impedit
        quos dolorem omnis debitis aliquam consequuntur error placeat sint
        suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo et facilis consectetur distinctio molestias voluptas illum qui
        unde perferendis officia totam autem sint reiciendis dolorum ducimus
        architecto molestiae deleniti reprehenderit temporibus, soluta, deserunt
        obcaecati omnis fugit repellat! Rerum odio eveniet soluta eos facere
        repellendus maxime, perspiciatis minus quibusdam incidunt pariatur,
        aliquam, facilis expedita aspernatur totam quasi fugiat in
        exercitationem fuga aut assumenda. Saepe laudantium amet rem. Quibusdam
        eveniet autem magni consequatur, odit at aspernatur rerum aut a quod
        facere nam culpa quia debitis libero hic? Harum repellendus deserunt
        beatae labore quia aut ex ipsam quae laborum nobis. Sint inventore,
        corporis laborum iure praesentium sunt nam aspernatur illo.
      </p>
      <div className="btn btn-primary" onClick={toggleDarkMode}>
        {text} Dark More
      </div>
    </div>
  );
}
