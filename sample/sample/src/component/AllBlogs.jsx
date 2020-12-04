import React, { Component } from 'react';
import {Card} from "react-bootstrap"

import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { editBlog, deleteBlog } from "../redux/actions/blogAction";


class AllBlogs extends Component {

    handleDelete = (event) => {
        let id = this.props.blog.id;
        this.props.deleteBlog(id);
      };

    handleEdit = () => {
        console.log("edit");
        this.props.onEdit(this.props.blog);
    };

    render() {
        const {blog,auth} = this.props
        if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />
        return (
            <div class="bolg">
              <div class="form">
                <h2>{blog.title}</h2>
                <p>{blog.story}</p>
                </div>
              <div>
              <><button onClick={this.handleEdit}>Edit</button> <button onClick={this.handleDelete}>Delete</button></>
              </div>  
              {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>
                  {blog.story}
                  </Card.Text> 
                </Card.Body>
                
              </Card>
              <button onClick={this.handleEdit}>Edit</button> 
              <button onClick={this.handleDelete}>Delete</button>  */}
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      user: state.firestore.ordered.user,

      auth: state.firebase.auth,
    }
  }
  
export default connect(mapStateToProps, { editBlog, deleteBlog })(AllBlogs);

