import React from 'react';
import './Blogs.css';
import img1 from '../../images/blog-images/img1.jpg';
import img2 from '../../images/blog-images/img2.png';
import img3 from '../../images/blog-images/img3.jpg';
import { Link } from 'react-router-dom';
const Blogs = () => {
    return (
        <div>
            <br /><br /><br />
            <h1 className='mt-5 mb-5 text-center fw-bold'>My blogs</h1>
            <section class="blog-sec container">
                <div class="blog-1 blog">
                    <div class="img">
                        <img src={img1} alt="" />
                    </div>
                    <div class="text">
                        <h1>Difference between authorization and authentication</h1>
                        <p>In simple words, Authorization is the rule and regulation of your act what you can do and what you can't. Example of Authorization can be, If you are admin you can remove a participant you have that power. However, a participant can't remove an admin.

                            On the other hand, Authentication is a system by which a person can be identified or verified. Simple authentication do by providing email and password. For an example, your student email address and id is needed to verify you by your institutional site. That site confirm you by your email and id which was provided by your institution.</p>
                        <Link to="/blogs">continue reading . . .</Link>
                    </div>
                </div>
                <div class="blog-2 blog">
                    <div class="text">
                        <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p>Firebase by Google is capable of to manage all real-time database. I'm using Firebase to Authenticate users of my personal project.I can handle my private route with firebase authentication.

                            Simply we can implement authentication by Email&Password. We can also use React firebase hooks for that authentication.In Firebase authentication can be implemented by Third party social authentication provider like Google, Facebook, Play Games, Game Center, Apple, GitHub, Microsoft, Twitter, Yahoo.</p>
                        <Link to="/blogs">continue reading . . .</Link>
                    </div>
                    <div class="img">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div class="blog-3 blog">
                    <div class="img">
                        <img src={img3} alt="" />
                    </div>
                    <div class="text">
                        <h1> What other services does firebase provide other than authentication</h1>
                        <p>
                            Except authentication, Google Firebase provides Database by which real time datastorage, quires and automatic scaling is possible. It also provides hosting services. We can deploy web apps in seconds free of cost.It provides Machine Learning packages for Android and Apple apps for powerful implementations. Without having deep knowledge in neural networks or model optimization developers can have ML features in their project.</p>
                        <Link to="/blogs">continue reading . . .</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;