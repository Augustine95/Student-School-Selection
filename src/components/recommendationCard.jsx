import React from 'react';

class RecommendationCard extends React.Component {
    render() {
        const { tweeterHandle, message, image } = this.props;

        return (
            <div className="testimonial">
                <article>
                    <img class="testimonial__image" src={image} alt={`An image of ${tweeterHandle}`} />
                    <p className="testimonial__handle">{`@${tweeterHandle}`}</p>
                    <p className="testimonial__message">{message}</p>
                </article>
            </div>
        );
    }
}

export default RecommendationCard;