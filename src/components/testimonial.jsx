import React from 'react'
import testimonial from './images/testimonial.webp'
import sprite from './images/sprite.svg'

const Testimonial = () => {
  return (
    <section>
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
          <div>
            <blockquote className="quote">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              consectetur doloremque ab repudiandae assumenda maxime adipisci.
              Eligendi aliquam culpa sed fugit minima, hic accusantium est
              labore quasi veniam molestias nulla.
            </blockquote>
            <article className="media">
              <div className="media__image">
                <svg className="icon icon--white icon--small">
                  <use href={`${sprite}#line`} />
                </svg>
              </div>
              <div className="media__body">
                <h3 className="media__title quote__author">Aisha Hamadi</h3>
                <p className="quote__organization">Baby Company, CEO</p>
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Testimonial
