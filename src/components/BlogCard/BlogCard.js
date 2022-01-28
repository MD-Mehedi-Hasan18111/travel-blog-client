import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BlogCard.css";
import {Link} from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { _id, title, date, time, category, image } = blog;

  return (
    <Col xs={12} md={6} lg={6}>
      <Row className="d-flex align-items-center mx-auto">
        <Col xs={12} md={12} lg={6} className="blog-img">
          <img src={image} alt="" />
        </Col>
        <Col xs={12} md={12} lg={6} className="ms-0">
          <h6 style={{color: "#2C3E50"}}>{title}</h6>
          <p>Category: {category}</p>
          <Link to={`/blogs/${_id}`} style={{textDecoration: "none"}}>
          <button className="signin authBtn">Read</button>
          </Link>
        </Col>
      </Row>
    </Col>
  );
};

export default BlogCard;
