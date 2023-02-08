import './about.css';

function About() {
  return (
    <div className='about-main'>
      <h1>About this project</h1>

      <div className="cards-arena">
        
        <div className="info-card">
          <mark>Current details</mark>
          <ul>
            <li>built with React</li>
            <li>state/useState for dark/light mode</li>
            <li>no backend</li>
          </ul>
        </div>

        <div className="info-card">
          <mark>Features to add</mark>
          <ul>
            <li>plug in an api</li>
            <li>add authentication</li>
            <li>create a database if time permits</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default About;