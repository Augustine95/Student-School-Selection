import React, { Component } from 'react'
import me1 from './images/me1.png'
import image1 from './images/image1.jpeg'
import RecommendationCard from './recommendationCard'
import hero from './images/hero.jpg'
import testimonial from './images/testimonial.jpg'
import sprite from './images/sprite.svg'

export default class HomePage extends Component {
  render() {
    return (
      <article className="login">
        <section className="grid grid--1x2 block block--secondary">
          <h1 className="block__heading animate__animated animate__pulse">
            Integrated Secondary School Selection System
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
        <section className="container">
          <h2 className="section__heading">What others have to say.</h2>
          <article className="testimonials grid grid--1x2">
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
          <h2 className="section__heading">What Head Teacher Has to Say</h2>
          <article className="plan testimonials">
            <div className="grid grid--1x2">
              <div className="testimonials__image">
                <img src={testimonial} alt="A good looking head mistress" />
                <span className="icon-container icon-container--accent">
                  <svg className="icon icon--white icon--small">
                    <use href={`${sprite}#quotes`} />
                  </svg>
                </span>
              </div>
              <blockquote className="quote">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                consectetur doloremque ab repudiandae assumenda maxime adipisci.
                Eligendi aliquam culpa sed fugit minima, hic accusantium est
                labore quasi veniam molestias nulla.
              </blockquote>
              <div className="media">
                <div className="media__image">
                  <svg className="icon icon--white icon--small">
                    <use href={`${sprite}#line`} />
                  </svg>
                </div>
                <div className="media__body">
                  <h3 className="media__title quote__author">Aisha Hamadi</h3>
                  <p className="quote__organization">Baby Company, CEO</p>
                </div>
              </div>
            </div>
          </article>
        </section>
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
              On your profile page, choose the levels of interest on the seleced
              schools.{' '}
            </li>
          </ol>
        </section>
      </article>
    )
  }
}
