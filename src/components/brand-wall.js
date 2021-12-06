import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import Img from "gatsby-image"

const companies = [
  {name:"City of Melboune",logo:"../../../static/assets/brands/city-of-melbourne.png"},
  {name:"RMIT",logo:"https://upload.wikimedia.org/wikipedia/en/4/41/All_blacks_logo.png"}
]

const PostMaker = ({ data }) => (
  <section className="h%ome-posts">
    <h2>
      Some awesome folks I've worked with{" "}
      <span class="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    <div className="grids col-1 sm-2 lg-3">{data}</div>
  </section>
)

export default function BrandWall() {
  const posts = companies
    .map(company => (
      <div class="logo-wall-image"
      style={{
        "background-image":`url(${company.logo})`,
        width:"200px",
        height:"200px",
        "background-position":"50% 50%",
        "background-size":"contain",
        "background-repeat":"no-repeat"
      }}
        // objectFit="cover"
        // objectPosition="50% 50%"
        // alt={company.name + " - Featured image"}
        // className="featured-image"
      />
    ))
  return <PostMaker data={posts} />
}
