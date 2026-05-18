const snippets = [
  {
    id: 1,
    title: "Fetch API Example",
    language: "JavaScript",
    code: `fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))`,
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
  },

  {
    id: 3,
    title: "React useEffect",
    language: "React",
    code: `useEffect(() => {
  console.log('Component Mounted')
}, [])`,
  },
];

export default snippets;
