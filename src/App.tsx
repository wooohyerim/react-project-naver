function App() {
  return (
    <section id="tables">
      <h2>Poke API</h2>
      <div className="overflow-auto">
        <table className="striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default App
