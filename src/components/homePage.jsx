import React, { Component } from 'react'
import me1 from './images/me1.png'
import image1 from './images/image1.jpeg'
import RecommendationCard from './recommendationCard'
import hero from './images/hero.jpg'
import Testimonial from './testimonial'

export default class HomePage extends Component {
  render() {
    return (
      <article className="login hero">
        <section className="grid grid--1x2 block block--secondary">
          <h1 className="block__heading animate__animated animate__pulse">
            Integrated School Selection
          </h1>
          <img className="hero__image" src={hero} alt="" />
        </section>
        <div class="introduction-content container-banner">
          <h2 className="section__heading">Introduction</h2>
          <p className="introduction-content__body">
            We are here to help you get the school of your dream. We'll give you
            a notification of the school you have been chosen basing on what you
            selected. This process is completely free.{' '}
            <a className="anchor" href="/login">
              Login
            </a>{' '}
            or{' '}
            <a className="anchor" href="/register">
              Register
            </a>{' '}
            with us to get started.{' '}
          </p>
        </div>
        <section className="container other-testimonials">
          <h2 className="section__heading ">What others have to say.</h2>
          <article className=" grid grid--1x2">
            <RecommendationCard
              image={me1}
              message="This website has connected me with the school of my dream."
              tweeterHandle="awuoriaugustine"
            />
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
            <RecommendationCard
              image={image1}
              message="I've never met any better site that allocates better schools."
              tweeterHandle="tweeterlover"
            />
          </article>
        </section>
        <section className="container">
          <Testimonial />
        </section>
        <footer className="footer">
          <div className="callout callout--primary">
            <div className="grid grid--1x2">
              <div className="callout__content">
                <h3 className="callout__heading">Ready to Get Started?</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam, esse!
                </p>
              </div>
              <a href="/login" className="btn btn--secondary btn--stretched">
                Get Started
              </a>
            </div>
          </div>
          <section className="help-guide skew-left container-banner">
            <h2 className="section__heading help-guide__header">Help Centre</h2>
            <h3>Steps</h3>
            <ol>
              <li className="list__item">
                Login or Register. You'll be directed to a page to input your
                subject scores
              </li>
              <li className="list__item">
                Fill in your scores for the mentioned subjects. Then submit the
                results.
              </li>
              <li className="list__item">
                On the Schools tab, choose at most three schools with interest
                level from 1 to 3.
              </li>
              <li className="list__item">
                On your profile page, choose the levels of interest on the
                seleced schools.{' '}
              </li>
            </ol>
          </section>
        </footer>
      </article>
    )
  }
}
