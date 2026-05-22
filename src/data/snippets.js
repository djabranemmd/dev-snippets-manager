const snippets = [
  {
    id: 1,
    title: "Fetch API Example",
    language: "JavaScript",
    code: `fetch('/api/data')
  .then((res) => res.json())
  .then((data) => console.log(data));`,
    tags: ["api", "fetch"],
    favorite: false,
  },

  {
    id: 2,
    title: "Center Div CSS",
    language: "CSS",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    tags: ["css", "layout"],
    favorite: true,
  },

  {
    id: 3,
    title: "React useEffect",
    language: "React",
    code: `useEffect(() => {
  console.log("Mounted");
}, []);`,
    tags: ["react", "hooks"],
    favorite: false,
  },
];

export default snippets;
