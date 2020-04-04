import React, { Component } from "react"
import Title from "../globals/title"
import Img from "gatsby-image"

const getCategory = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: props.items.edges,
      productData: props.items.edges,
      categories: getCategory(props.items.edges),
    }
  }
  handleItems = category => {
    //console.log(category)
    let tempItems = [...this.state.product]
    if (category === "all") {
      this.setState(() => {
        return { productData: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { productData: items }
      })
    }
  }
  render() {
    if (this.state.product.length > 1) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="our selection" />
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => this.handleItems(category)}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="row">
              {this.state.productData.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0  text-capitalize ">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="our selection" />
            <div className="row">
              <div className="col-10 c0l-sm-6 mx-auto text-center text-capitalize">
                <h1>No Items to Display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
