import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import SEO from "../components/seo";
import BlogList from "../components/blogList";
import Image from "gatsby-image";

const Index = () => {
  const [navbar, setNavbar] = useState(false);

  const data = useStaticQuery(graphql`
    query HomeQuery {
      headshot: file(absolutePath: { regex: "/headshot.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      somaticnet: file(absolutePath: { regex: "/somaticnet.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iphone: file(absolutePath: { regex: "/iphone.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      myphysio: file(absolutePath: { regex: "/myphysio.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visualcognition: file(absolutePath: { regex: "/visualcognition.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seeingsight: file(absolutePath: { regex: "/seeingsight.jpg/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      circuitboard: file(absolutePath: { regex: "/circuit-board.svg/" }) {
        publicURL
      }
    }
  `);

  return (
    <div>
      <SEO title="Luke Harries"/>
      <header className="navbar-fixed">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="/#">
              Harries.co
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav3"
              aria-controls="navbarNav3"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setNavbar(!navbar)}
            >
              <span className="fa fa-bars" style={{ color: "#777" }}/>
            </button>

            <div aria-hidden='true' className="collapse navbar-collapse" id="navbarNav3" style={{display: navbar ? 'block' : 'none'}} onClick={() => setNavbar(false)}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#bio">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#hackathons">
                    Hackathons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section
        className="fdb-block fullscreen"
        style={{
          background: `url(${data.circuitboard
            .publicURL}), linear-gradient(to left, black, blue)`
        }}
      >
        <div className="container">
          <Image
            fixed={data.headshot.childImageSharp.fixed}
            className="headshot"
          />
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-8 fdb-box overflowing">
              <h2>
                <br/>Luke Harries
              </h2>
              <p>Hi! I'm an entrepreneur and software engineer</p>
              <p>
                <a href="#bio">Scroll</a> to find out more 👀
              </p>
              <p className="text-h2">
                <a href="https://github.com/lharries" aria-label="github">
                  <i
                    className="fa fa-github"
                    aria-hidden="true"
                    title="github"
                  />&nbsp;
                </a>
                &nbsp;
                <a
                  href="https://www.linkedin.com/in/luke-harries/"
                  aria-label="linkedin"
                >
                  <i
                    className="fa fa-linkedin"
                    aria-hidden="true"
                    title="linkedin"
                  />&nbsp;
                </a>
                &nbsp;
                <a
                  href="https://twitter.com/lukeharries_/"
                  aria-label="twitter"
                >
                  <i
                    className="fa fa-twitter"
                    aria-hidden="true"
                    title="twitter"
                  />&nbsp;
                </a>
                &nbsp;
                <a href="https://medium.com/@lharries" aria-label="medium">
                  <i className="fa fa-medium" aria-hidden="true"/>&nbsp;
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block" id="bio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-8">
              <h2>About Me</h2>
              <p className="text-h3">
                <strong>
                  I'm on a mission to solve real problems at scale.
                </strong>
                <br/>
                <br/>
                To date, I've approached this in several ways: building
                companies; working as a contract software engineer developing
                websites, apps, and machine learning pipelines; and consulting
                for early-stage tech startups on product development, technical
                hiring, and outsourcing.
                <br/>
                <br/>
                I'm currently building something new. If you'd like to find out
                more, reach out through{" "}
                <a href="https://twitter.com/LukeHarries_">Twitter</a> or{" "}
                <a href="https://www.linkedin.com/in/luke-harries/">
                  LinkedIn
                </a>.
                <br/>
                <br/>
                Previously, I was an AI Resident at Microsoft Research working
                on deep reinforcement learning. Before, I studied the MSc in
                Computer Science at UCL, completing my thesis with{" "}
                <a href="http://ccg.ai">Cambridge Cancer Genomics</a>, a Y
                Combinator backed BioTech Startup. I studied pre-med at
                Cambridge where I was the founding President of the Cambridge
                StartUp Society hosting events with startup founders and venture
                capitalists. My work on cognitive neuroscience was{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/29604698">
                  published
                </a>. Alongside, I co-founded Proteam, which we grew to be the
                largest platform for intra-university sport in the UK with
                9,000+ users.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-8">
              <h2>Blog</h2>
              <BlogList/>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block" id="news">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-8">
              <h2>News</h2>
              <h2>2020</h2>
              <ul className="text-h3">
                <li>
                  <em>1st January</em> - I'm based in San Francisco until the
                  Summer
                </li>
              </ul>
              <h2>2019</h2>
              <ul className="text-h3">
                <li>
                  <em>8th December</em> - Our work combining graph neural
                  networks and deep reinforcement learning will be presented at
                  the{" "}
                  <a href="https://sites.google.com/view/deep-rl-workshop-neurips-2019/home#h.p_7z_mbUjm5DxN">
                    Deep Reinforcement Learning Workshop at NeurIPS
                  </a>
                </li>
                <li>
                  <em>16th September</em> - I'm building a new company focused
                  on augmenting human capabilities with AI. More details soon!
                </li>
                <li>
                  <em>13th September</em> - Today was my last day at Microsoft
                  Research.{" "}
                  <a href="https://twitter.com/LukeHarries_/status/1174994247461888001">
                    Here
                  </a>{" "}
                  are a few of my highlights
                </li>
                <li>
                  <em>4th September</em> - I will be speaking at the{" "}
                  <a href="https://www.meetup.com/London-PyTorch-Meetup/">
                    London PyTorch meetup
                  </a>{" "}
                  on Mental Models for Deep Learning
                </li>
                <li>
                  <em>22nd - 29th July</em> - I will be in San Francisco for{" "}
                  <a href="https://joininteract.com">Interact</a>
                </li>
                <li>
                  <em>9th - 16th June</em> - I will be at{" "}
                  <a href="https://icml.cc/Conferences/2019">ICML 2019</a> in
                  Long Beach presenting{" "}
                  <a href="https://github.com/microsoft/MazeExplorer">
                    MazeExplorer
                  </a>{" "}
                  at the "Understanding and Improving Generalization in Deep
                  Learning" workshop
                </li>
                <li>
                  <em>23rd March</em> - I will be leading a workshop on Deep
                  Learning for Detecting Disease at the Imperial Medical
                  Student's Coding conference
                </li>
                <li>
                  <em>20th January</em> - We won HackCambridge using in-browser
                  machine learning to improve physiotherapy adherence!
                </li>
              </ul>
              <h2>2018</h2>
              <ul className="text-h3">
                <li>
                  <em>1st - 10th December</em> - I will be at{" "}
                  <a href="https://nips.cc/Conferences/2018">NeurIPS 2018</a> in
                  Montreal presenting{" "}
                  <a href="https://www.ccg.ai/projects/net">SomaticNet</a> at
                  the Machine Learning for Health workshop
                </li>
                <li>
                  <em>17th September</em> - I will be joining Microsoft Research
                  Cambridge as the first cohort of AI Residents outside of
                  Europe!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fdb-block projects" id="projects">
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col col-md-8 text-center">
              <h2>Projects</h2>
              <p className="text-h3 ">
                <strong>
                  Here are two projects that I am proud to have led.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block project">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10">
              <div className="row">
                <div className="col col-md-6 col-12">
                  <div>
                    <h2>
                      Deep Learning for Detecting Cancer Mutations{" "}
                      <span aria-label="microscope" role="img">
                        🔬
                      </span>
                    </h2>
                    <button className="stack-badge purple">
                      <strong>Research</strong>
                    </button>
                    <button className="stack-badge green">
                      <strong>Machine Learning</strong>
                    </button>
                    <button className="stack-badge red">
                      <strong>Python</strong>
                    </button>
                    <p className="text-h3 ">
                      I completed my master's thesis with{" "}
                      <strong>Cambridge Cancer Genomics (YC S17)</strong>,
                      leading the development of SomaticNet - a novel method for
                      detecting cancer mutations.
                      <br/>
                      <br/>
                      The resulting{" "}
                      <a href="https://arxiv.org/pdf/1811.11674.pdf">
                        paper
                      </a>{" "}
                      was accepted at the Machine Learning for Health workshop
                      at NeurIPS 2018 and the tool is publically available via <a
                      href="https://www.ccg.ai/projects/net">
                      CCG's website
                    </a>.
                    </p>
                  </div>
                </div>
                <div className="col col-md-6 col-12">
                  <Image
                    fluid={data.somaticnet.childImageSharp.fluid}
                    className="project-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block project">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-md-10">
              <div className="row">
                <div className="col col-md-6 col-12">
                  <Image
                    fluid={data.iphone.childImageSharp.fluid}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col col-md-6 col-12">
                  <div>
                    <h2>
                      Proteam{" "}
                      <span aria-label="football" role="img">
                        🏉
                      </span>
                    </h2>
                    <button className="stack-badge orange">
                      <strong>Startup</strong>
                    </button>
                    <button className="stack-badge teal">
                      <strong>Javascript</strong>
                    </button>
                    <button className="stack-badge black">
                      <strong>iOS and Android</strong>
                    </button>
                    <p className="text-h3 ">
                      During my final year at Cambridge, I co-founded and was
                      CTO of Proteam which we built to solve the lack of
                      organisation of University Sport.
                      <br/>
                      <br/>
                      The iOS and Android apps allowed students to follow teams,
                      get notified of upcoming games, create team-sheets and
                      much more.
                      <br/>
                      <br/>
                      We grew the platform to <strong>9,000+ users</strong>{" "}
                      across 6 Universities. You can find an archive of the
                      website <a href="https://harries.co/proteam/">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fdb-block team-1" id="hackathons">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-8">
              <h2>Hackathons</h2>
              <p className="text-h3">From idea to prototype in 24-hours!</p>
            </div>
          </div>

          <div className="row-50"/>

          <div className="row">
            <div className="col-sm-4 text-left">
              <div className="fdb-box box-shadow">
                <Image
                  fluid={data.myphysio.childImageSharp.fluid}
                  className="img-fluid"
                />

                <div className="content">
                  <h3>
                    <strong>MyPhysio</strong>
                  </h3>
                  <p>
                    <span aria-label="celebrate" role="img">
                      🎉
                    </span>{" "}
                    Winner of HackCambridge 2019
                    <br/>
                    <br/>
                    We developed a tool to gamify physiotherapy workouts by
                    using machine learning to classify poses. The aim is to
                    increase adherence of at home workouts. All training and
                    prediction is done in-browser using Tensorflow.js, reducing
                    any reliance on servers and meaning your images never leave
                    the computer - maintaining privacy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-left">
              <div className="fdb-box box-shadow">
                <Image
                  fluid={data.visualcognition.childImageSharp.fluid}
                  className="img-fluid"
                />

                <div className="content">
                  <h3>
                    <strong>VisualCognition</strong>
                  </h3>
                  <p>
                    <span aria-label="celebrate" role="img">
                      🎉
                    </span>{" "}
                    Winner of HackCambridge's Microsoft Prize 2018
                    <br/>
                    <br/>
                    For the millions of people with Visual Impairments, images
                    online are inaccessible. We created a chrome extension which
                    uses machine learning to automatically generate the missing
                    image captions. The captions describe what's in the photo,
                    who they are, and what any text says.
                    <br/>
                    <br/>
                    Visit{" "}
                    <a href="https://visualcognition.co/">
                      VisualCognition.co
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-left">
              <div className="fdb-box box-shadow">
                <Image
                  fluid={data.seeingsight.childImageSharp.fluid}
                  className="img-fluid"
                />

                <div className="content">
                  <h3>
                    <strong>SeeingSight</strong>
                  </h3>
                  <p>
                    <span aria-label="celebrate" role="img">
                      🎉
                    </span>{" "}
                    Winner of Allia's Serious Impact Hackathon 2017
                    <br/>
                    <br/>
                    We created the proof of concept for faster, cheaper and more
                    accurate screening of Macular Degeneration. It is built for
                    Google Cardboard which turns any phone into a VR headset.
                    <br/>
                    <br/>
                    Our solution has three parts: <br/>
                    1. Mapping the functional visual field <br/>
                    2. Increasing awareness of what it's like living with MD{" "}
                    <br/>
                    3. Warping a real-time camera feed to move images out of
                    your blind spot
                    <br/>
                    <br/>
                    Visit{" "}
                    <a href="https://github.com/sudo-challenge-mapmd/mapper">
                      Github
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fdb-block call-to-action">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h2>
                I love meeting people working on exciting things. If we haven't
                already met, reach out and let's phone or grab coffee!{" "}
                <span aria-label="coffee" role="img">
                  ☕
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
