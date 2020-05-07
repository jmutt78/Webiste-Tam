import React from 'react'
import styled from 'styled-components'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon,
} from 'mdbreact'

export const Root = styled.div`
  padding: 1px 150px 50px 150px;
  background-color: #79b3f1;
  width: 100%;
  margin-left: 0;
  color: white;
  .carousel-indicators li {
    background-color: white;
  }
  .carousel-indicators {
    bottom: -90px;
  }
  h4 {
    font-family: 'Helvetica', 'Helvetica Neue', Arial, 'Lucida Grande',
      sans-serif;
  }

  p {
    font-family: 'sofia-pro', Sans-serif;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6em;
    letter-spacing: 1px;
  }

  @media (max-width: 575px) {
    border-radius: 0;
    padding: 10px 15px 10px 15px;
    p {
      font-size: 15px;
    }
    .carousel-indicators {
      bottom: -60px;
    }
  }
`

const testArr = [
  {
    key: '1',
    title: `Deanne R - 43 Years Old`,
    text: `Tamilee is a fantastic personal trainer as she's knowledgeable, experienced and attentive.  She keeps workouts fresh by mixing up routines that are challenging for whatever level you're at and keeps her eye on you the whole time to make sure you're doing the exercise correctly to prevent any injuries.  In a very short period of time, I was able to accomplish my goal which was to build muscle/gain strength.  I now feel much stronger especially in my upper body and my legs.  I've worked with trainers in the past and Tamilee by far is the best one I've ever worked with and I highly recommend her!`,
  },
  {
    key: '2',
    title: `L.B. - 53 Years Old`,
    text: `Frustrated with my inability to lose weight, despite my regular gym workouts of weights, machines and cardio, I turned to Tamilee for 8 weeks of one-on-one fitness training.  Twice a week I worked out with Tamilee.  Her training went beyond physical, and incorporated nutritional direction for my mesomorph body-type.  Her Master’s degree in Exercise Science was evident in each targeted, fresh and challenging workout routine.  I gained strength, tone and endurance each week and lost 10 pounds and 8.5 inches.

I’ve had fitness trainers over the years, but do not feel previous trainers were as knowledgeable, inspiring or invested as Tamilee.  She encourages while holding you accountable with her no-nonsense approach.  My energy level has increased and I am enthused by the weight loss and body tone I’ve achieved in this short time span.   I plan to continue with Tamilee’s customized on-line fitness program to maintain the success I’ve had thus far and continue my progress.  I highly recommend Tamilee’s training services, particularly for women in their 50’s and 60’s, as she has a deep understanding of the hormonal body changes and challenges that transpire in these years.`,
  },
  {
    key: '3',
    title: `Lisa N - 43 Years Old`,
    text: `After remembering Abs of Steel as one of my favorite workouts and doing a quick search to see what Tamilee was up to I stumbled across Webb Workouts; I'm so glad I did!  Not only did I find all of the classic workouts I knew and loved - the absolute best added bonus was Tamilee's oversight.  I signed up for the four-week personal plan and, following a call to establish what I was looking to achieve, I received my personal calendar.  Tamilee was there every step of the way with encouragement and tips.  It's clear she's passionate about helping and supporting every one of her members.  She's very involved in both the website (she responds to every comment!) and the Facebook group.  I had such an amazing experience I just signed both my mother-in-law up for account as I think she'll love Webb Workouts as much as I do!  `,
  },
  {
    key: '4',
    title: `Debbie K  - 50 Years Old`,
    text: `Thanks to Tamilee’s coaching, I reached my goal to be in the best shape of my life on my 50th birthday last year. I lost an overall total of 11.5 inches in the 12-week program, and I feel great. I love to eat healthier and workout now. Our conference calls, messages, emails, texts and her positive attitude (one of her best attributes) really kept me motivated to follow through. I have remained on track since then by following her website monthly workout calendars. I have lost a total of 30 pounds since I started working out with her. I love that her videos clearly explain techniques on what to do and what not to do. I also like that she asks for input on what new videos we would like to see in the future. I don’t feel anyone could find a better coach anywhere so if you are looking to get healthier then definitely give her website a chance to change your life. She definitely changed mine for the better.`,
  },
]

export default () => {
  return (
    <Root>
      <section className="text-center my-5">
        <h3 className="h2-responsive font-weight-bold my-4">
          Tamilee - in their words
        </h3>

        <MDBCarousel
          activeItem={1}
          length={testArr.length}
          testimonial
          interval={false}
          showIndicators={true}
          className="no-flex"
        >
          <MDBCarouselInner>
            {testArr.map(({ title, text, key }) => (
              <MDBCarouselItem itemId={key} key={title}>
                <p>
                  <MDBIcon icon="quote-left" /> {text}
                </p>
                <h4 className="font-weight-bold">{title}</h4>

                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
                <MDBIcon icon="star" className="orange-text" />
              </MDBCarouselItem>
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </Root>
  )
}
