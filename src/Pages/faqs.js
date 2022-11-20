import React from 'react';
import Layout from '../components/Layout';

const Faqs = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="mb-2">FAQS</h1>
        <strong>
          Find below the top frequently asked questions by Challenge Solvers and
          Challenge Hosts.
        </strong>
        <h2>Challenge Solvers</h2>
        <strong>
          How do I know if I’m eligible or qualified to solve a challenge?
        </strong>
        <p>
          There is no one-size-fits-all answer to this question - it depends on
          the specific challenge and what the requirements are. However, here
          are some general tips to keep in mind:
        </p>
        <ul style={{listStyle: 'none'}}>
          <li>
            - First, make sure you understand the problem that the challenge is
            trying to solve. This will help you determine if your skills and
            experience are a good fit for the challenge.
          </li>
          <li>
            - Next, check the eligibility requirements carefully in the Rules
            section. Some challenges may have specific requirements, such as
            being a certain age or having a certain level of experience.
          </li>
          <li>
            - Finally, don’t be afraid to reach out to the challenge organizer
            via the challenge dashboard if you have any questions. They will be
            able to give you more information about the challenge and whether or
            not you are eligible to participate.
          </li>
        </ul>

        <strong>
          Can I find people to solve a challenge with me as a team?
        </strong>

        <p>
          Yes! You can find people to solve a challenge with you as a team by
          creating a team and indicating that you’re looking for members,
          searching for a team in the teams forum that is looking for members,
          or doing your <br /> <br /> Alternatively, you can do your own
          outreach outside of InnoBear <br /> There are many ways to find people
          to work on a challenge with you, including online forums, social media
          groups, and online directories. You can also reach out to friends,
          family, and acquaintances to see if they know anyone who might be
          interested in working on a challenge with you. Once you have found
          potential team members, you can contact them directly to discuss the
          challenge and see if they are interested in working on it with you. If
          it’s a go, have them get registered and join your team on InnoBear.
        </p>
        <strong>
          Is there a limit to the number of challenges I can participate in?
        </strong>
        <p>
          No, there is no limit to the number of challenges you can participate
          in.
        </p>
        <h2>Challenge Hosts</h2>
        <strong>Can I host a challenge that doesn’t award a cash prize?</strong>
        <p>
          At this time we only enable the ability to host a challenge without a
          cash prize in conjunction with our support to design and manage the
          challenge. Connect with us at InnoBear@floor23digital.com to get
          advice from our sales team on the best option for your challenge.
        </p>

        <strong>
          If solutions are provided by external participants, who gets the
          intellectual property?
        </strong>
        <p>
          Know that there are a number of choices when it comes to setting terms
          on intellectual property. The company that commissions the work will
          usually own the intellectual property rights in the solution or at the
          least the right to license or use in perpetuity unless there is an
          agreement in place to the contrary. This is because the company is
          paying for the work to be done and so should own the resulting
          solution. However, if the solution is provided by an external
          participant who is not being paid by the company, then the question of
          who owns the intellectual property rights in the solution will depend
          on the circumstances. For example, if the solution is provided as part
          of a competition, the competition organizers may specify in the rules
          who will own the intellectual property rights in the winning solution.
          Alternatively, if the solution is provided spontaneously without any
          expectation of payment or reward, then the person who provides the
          solution may retain the intellectual property rights in it. We can
          provide recommendations as part of the challenge design.
        </p>
        <strong>
          What types of challenges can we run with Floor23 InnoBear?
        </strong>
        <p>
          There are five different types of challenges that we cover at Floor23.
          And those challenge types can be used to cover various types of
          innovation activity (technology scouting/roadmapping, ideation, new
          product/process development) you may need to perform. Our challenge
          types include Ideation Challenges, Engagement Challenges,
          Analysis/Open Data Challenges, Build Challenges, and Prototype
          Acceleration Challenges. COnnect with us, <br />
          <a href="mailto:innobear@floor23digital.com">
            innobear@floor23digital.com
          </a>
          &nbsp; to get guidance on which of these challenges is best for what
          you’re trying to tackle as part of challenge design
        </p>
        <strong>About Us</strong>
        <p>
          Floor23 InnoBear is an open innovation software application of
          Floor23digital, LLC. Our aim at Floor23 is to solve product, process,
          and engagement problems through crowd-based projects and participant
          education.
          <br />
          <br />
          We’re all about innovation, and capturing the brilliance of the crowd.
          Not just any crowd…but diverse crowds. Diversity in innovation
          produces unthinkable outcomes and we’re here to facilitate that
          brainpower value exchange. <br />
          Learn more about Floor23 on the Floor23digital.com homepage.
        </p>
      </div>
    </Layout>
  );
};

export default Faqs;
