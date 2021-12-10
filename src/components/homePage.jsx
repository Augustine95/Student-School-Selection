import React, { Component } from 'react';
import me1 from './images/me1.png';
import image1 from './images/image1.jpeg';
import RecommendationCard from './recommendationCard';

export default class HomePage extends Component {
	render() {
		return (
			<div className="login">
				<h1 className="heading animate__animated animate__pulse">Integrated Secondary School Selection System</h1>
				<div class="introduction-content container-banner">
					<h2>Introduction</h2>
					<p className="introduction-content__body">
						We are here to help you get school of your dream. We'll give you a notification of the school you
						have been chosen basing on what you selected. This process is completely free. <a href="/login">Login</a> or <a href="/register">Register</a> with
						us to get started.{' '}
					</p>
				</div>
				<h2>What others have to say.</h2>
				<section className="recommendations">
					<RecommendationCard
						image={me1}
						message="This website has connected me with the school of my dream."
						tweeterHandle="awuoriaugustine"
					/>
					<RecommendationCard
						image={image1}
						message="I've never met any better site that allocates better schools."
						tweeterHandle="tweeterlover"
					/>
				</section>
				<section className="help-guide skew-left container-banner">
					<h2 className="help-guide__header">Help Centre</h2>
					<h3>Steps</h3>
					<ol>
						<li>Login or Register. You'll be directed to a page to input your subject scores</li>
						<li>Fill in your scores for the mentioned subjects. Then submit the results.</li>
						<li>On the Schools tab, choose at most three schools with interest level from 1 to 3.</li>
						<li>On your profile page, choose the levels of interest on the seleced schools. </li>
					</ol>
				</section>
			</div>
		);
	}
}
