import './App.css'

function App() {
  return (
    <>
      <div>hello ji</div>

      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>

      <div className="card" style={{width: '18rem'}}>
        <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" className="card-img-top" alt="Supercar"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="https://www.carwow.co.uk/best/best-supercars#gref" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}

export default App
