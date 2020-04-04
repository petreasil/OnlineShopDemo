import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto text-yellow text-center text-capitalize">
            <h3>all right reserved &copy; {new Date().getFullYear()}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}
