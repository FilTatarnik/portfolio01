import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-900 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-100`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://i.imgur.com/1eu9hyW.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
      subtitle: "",
      title: "Country Naturals",
      description: `My partner and I spent time going back and forth working on the website. No one particularly did any one thing www.Countrynaturals316.com`,
      url: "https://www.Countrynaturals316.com",
    },

    {
      imageSrc:
        "https://i.imgur.com/drLyxe9.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      subtitle: "",
      title: "LeashPals",
      description:
        "(Ruby/Sinatra/ReactJS/Postgres) This app is a Full Stack Web App that is currently being built and is used to schedule dog walks with registered Walkers. There is an interface for walkers to setup their available schedule and approve scheduled walks, and an interface for pet owners to register their dogs and schedule walks with registered Walkers.. This application implements a user authentication and permission system, as well as calendar scheduling. Youtube.com/watch?v=FzW_5Nj7h_s",
      url: "https://timerse.com",
    },

    {
      imageSrc:
        "https://i.imgur.com/gQfOG2I.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "",
      title: "All Mirror and Glass",
      description:
        "This is a website redesign that I'm currently working on for a Mirror and Glass company based out of St Charles Illinois. Youtube.com/watch?v=5PSA7TNOqxU",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://i.imgur.com/6kZaSvs.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "",
      title: "Promise Holdings LLC",
      description:
        "This is a Website I created for Promise Holdings LLC. It’s an investment/ holdings company based out of Chicago, Illinois. I used ReactJS for this project.",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://i.imgur.com/qfCxlRx.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
      subtitle: "",
      title: "InkBerrie",
      description:
        "This was made to be kind of like instagram, but with profiles similar to how other social network websites work and Users would be able to have favorite artists and like pictures that pop up on their feeds and even schedule tattoos with local artists that they like. This was made with Express and node. With a MongoDB backend",
      url: "https://timerse.com",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle id="aboutMeHeading">About Me </HeadingTitle>
          <HeadingDescription
            style={{
              fontSize: "12px",
            }}
          >
            I'm Fil and I'm a Junior Web Developer. I graduated from the Full
            Stack Web Developer Course at General Assembly in Downtown Chicago
            in Dec 2018. Since then, i've been doing freelance programming work
            while I work a full time job. Eventually I'd love to get to a point
            where programming IS my full time job!
            <br />
            <br />I have experience in creating static and dynamic webpages
            using ReactJS. I prefer using the Express framework, which allows me
            to build a server side application using JavaScript and lets me
            build my REST API in JavaScript. I've used Ruby for my back end stu,
            but I'd like to venture into using Python/ Django for my back end. I
            like SQL databases. I use Postgresql as my database management
            system.
          </HeadingDescription>
        </HeadingInfoContainer>
        <br />
        <br />

        <hr
          style={{
            width: "100%",
            textAlign: "left",
            marginLeft: "0",
            paddingTop: "10px",
          }}
        />

        <Content>
          <HeadingTitle id="projectsSection">Projects</HeadingTitle>
          <AnimationRevealPage>
            {cards.map((card, i) => (
              <Card key={i} reversed={i % 2 === 1}>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Subtitle>{card.subtitle}</Subtitle>
                  <Title>{card.title}</Title>
                  <Description>{card.description}</Description>
                </Details>
              </Card>
            ))}
          </AnimationRevealPage>
        </Content>
      </SingleColumn>
    </Container>
  );
};
