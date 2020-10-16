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
    topic: "Backing up your code with Github Remotes",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/TOsVVxXdtu8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "It's important to add remotes to your local repository so you can backup your code to places like Github, Gitlab and Bitbucket. In this video we explore this pivotal feature in depth.",
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
  {
    topic: "VSCode: Super Charged Code Editor",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/Pf54xUgWzhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "VSCode has quickly become one of the most popular Code Editors around. While there are other quality code editors like Atom and Sublime, VSCode and its vast library of extensions and built in tools make it a top choice among Free Code Editors. If willing to spend some cash you may also enjoy the language targeted suite of IDEs from JetBrains such as WebStorm, RubyMine and Pycharm.",
  },
  {
    topic: "VSCode: The Best Extensions",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/eftHJZwHYTQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "In this video I go over many of the most useful VSCode extensions.",
  },
  {
    topic: "Chrome Dev Tools: Your Best Friend",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/Bx9bhPOxNZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "One of the biggest frustrations in web development is testing and debugging. With the chrome dev tools you can make this headache go away by using tools to tweak and test properties live, see http requests and more right from the browser.",
  },
  {
    topic: "cURL, Postman, REST Client: Testing APIs ",
    embed:
      '<iframe height="315" src="https://www.youtube.com/embed/ruYh5Nuc98A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    flavor:
      "API's are what give our frontend code life allowing us to interact with remote databases to create, read, update and delete data. Whether a 3rd party API or your own custom built API you need to test to make sure it works and you know how it works. cURL, Postman and Rest Client are three great options for testing your API endpoints.",
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
