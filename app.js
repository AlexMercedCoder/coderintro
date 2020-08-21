const videos = [
  {
    topic: "The Terminal: Bash",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/snOP94q34V4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "Mac and Linux both share the bash terminal which is at the heart of much of what you'll do as a develop so learning bash is step one. If on windows download git-bash to have a Bash terminal at your disposal.",
  },
  {
    topic: "SSH Keys: Making Logging in... Uneccessary",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/6u84sACs0v0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "SSH Keys allow you to create a data footprint that allows services like github to recognize your computer and auto-login without you having to type in your credentials everytime, and it's very secure too!",
  },
  {
    topic: "Github: Tracking Your Code",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/L4zbgo7KFoA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "Github is standard for version control. With Git you can keep track of updates to your code and collaborate with other. With github.com you can push code from your local git repositories online to save, secure and share!",
  },
  {
    topic: "Markdown: Making Documentation",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/lbpRomejEd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "On github.com the way you write documentation for your projects is through markdown files (like readme.md). In this video learn how markdown works so you can write quality documentation for your projects.",
  },
  {
    topic: "NodeJS: Javascript Beyond the Browser",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/MifUZuRKrqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "Javascript should be one of the first langauges you learn, and Javascript goes a lot further than manipulating what's in the browser. NodeJS Lets you run JS code out of the browser to make scripts, server-side applications and more!",
  },
];

const main = document.querySelector("main");

videos.forEach((vid, index) => {
  const div = document.createElement("div");
  const { topic, embed, flavor } = vid;
  div.innerHTML = `<h2>${topic}</h2>
    <article>${embed}<article>
    <p>${flavor}</p>`;
  main.appendChild(div);
});
