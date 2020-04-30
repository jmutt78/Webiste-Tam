import React from "react"
import styled from "styled-components"

import tamilee from "../../images/tamilee-green.jpg"

export const Root = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  font-family: "Helvetica", "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  padding-right: 0%;
  @media (max-width: 767px) {
    min-height: auto;
    flex-wrap: wrap;
  }
`

export const BioPage = styled.div`
  position: sticky;
  width: 44%;
  min-height: 100px;
  padding-top: 0px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const BioWrapper = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  padding: 220px 10% 80px;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #79b3f1;
    margin-bottom: 10px;
    line-height: 36px;
  }
  p {
    margin-bottom: 10px;
    font-family: sofia-pro, sans-serif;
    letter-spacing: 2px;
  }

  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

export const BioImage = styled.div`
  width: 450px;
  height: 450px;
  margin-bottom: 15px;

  background-image: url(${props => props.img});
  background-position: 0px 0px;
  background-size: cover;
  border-radius: 3%;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const BioContent = styled.div`
  width: 56%;
  min-height: 100px;
  padding-top: 220px;

  @media (max-width: 767px) {
    width: 100%;
    padding-top: 0px;
  }
`

export const BioContentWrapper = styled.div`
  min-height: 100px;
  padding-right: 10%;

  padding-left: 10%;

  .biotxtwrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h3 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #79b3f1;
    color: #36454f;
    font-size: 36px;
    line-height: 36px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`

const para1 = `Tamilee Webb earned a Bachelor of Arts degree in Physical Education and a Master of Arts degree in Exercise Science both attained at California State University, Chico. She has furthered her education with involvement in IDEA, AFAA, ACE, and FIT Athletic Club and is now CEO of Webb International, Inc. 1993, her peers recognized Tamilee with the Fitness Instructor (Trainer) of the Year award, bestowed by IDEA, the association of fitness professionals, after having been a three-time nominee in the category.`

const para2 = `In 1992, Tamilee received the coveted Self Magazine Award for best lower body exercise for her third in a series of twenty-two award-winning Buns of Steel videos. Tamilee has been the recipient of numerous other awards for outstanding achievement in the field of personal fitness, including Best Exercise Video and Best Training Organization 1987, conferred by IDEA, has been honored by California State University, Chico, Outstanding Alumni of 1990 and 1996. Inducted in the FITNESS HALL OF FAME in 2008, Tamilee shares this honor with fellow fitness celebrities as Kathy Smith, Gilad Janklowicz, Jack Lalanne, and Jane Fonda to name a few.`
const para3 = `Millions of fans worldwide have long admired Tamilee's no-nonsense approach to mind, body, health and fitness that can be achieved within the home. Her energy, exuberance and specially designed proven weight loss workout programs have consistently elevated her to the top of the Billboard charts. Her four best-selling books "The Original Rubber Band Workout" (sold in six countries and translated into five languages), "Step-up Fitness", both published by Workman Publishers, third book, "Workout for Dummies" (IDG Books), and her newest book "Defy Gravity Workout" have contributed to the renown that she has so deservedly earned. Tamilee has been a co-host on the Health Network Channel's aerobic fitness shows now known as Discoveries "Fit TV". The network services more than 50 million households and its audience continues to grow rapidly. She has also hosted ESPN's Fitness Pro Series, and consulted on Fox Sports Fitness show "Body Squad". Tamilee is best know for her Buns of Steel series that has sold more then 10 million copies which include her Quick-Toning Series, and co-hosted the Buns of Steel Platinum Series. Now available on DVD and digital download, back by popular demand and continues to be her best seller of all times! `

export default () => (
  <Root>
    <BioPage>
      <BioWrapper>
        <BioImage img={tamilee} />
        <h3>Tamilee Web</h3>
        <p>Owner</p>
      </BioWrapper>
    </BioPage>
    <BioContent>
      <BioContentWrapper>
        <div className="biotxtwrapper">
          <h3>About Tamillee</h3>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
      </BioContentWrapper>
    </BioContent>
  </Root>
)
