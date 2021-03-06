import React, { Component } from 'react';
import './Blog.css';

import { Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quidfd-dfdf=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
       

            </div>
        );
    }
}

export default Blog;