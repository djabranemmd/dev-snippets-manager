const snippets = [
  {
    id: 1,
    title: 'Fetch API Example',
    language: 'JavaScript',
    isFavorite: false,
    tags: ['api', 'fetch', 'async'],
    code: `fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))`,
  },

  {
    id: 2,
    title: 'Center Div CSS',
    language: 'CSS',
    isFavorite: true,
    tags: ['css', 'layout', 'flexbox'],
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
  },

  {
    id: 3,
    title: 'React useEffect',
    language: 'React',
    isFavorite: false,
    tags: ['react', 'hooks', 'frontend'],
    code: `useEffect(() => {
  console.log('Component Mounted')
}, [])`,
  },
]

export default snippets