import React from "react"
import { Grid, Cell } from "react-mdl"

export default class iClinic extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        {/* intro */}
        <p className="projectTitle">iClinic Appointment Management system</p>
        <div style={{ paddingLeft: "25%" }}>
          <Grid noSpacing>
            <Cell col={2}>Client Name</Cell>
            <Cell col={4}>iCLINIC</Cell>
          </Grid>
          <Grid noSpacing>
            <Cell col={2}>Sector</Cell>
            <Cell col={4}>Healthcare</Cell>
          </Grid>
          <Grid noSpacing>
            <Cell col={2}>Platform</Cell>
            <Cell col={4}>Mobile & Watch</Cell>
          </Grid>
          <Grid noSpacing>
            <Cell col={2}>Methods</Cell>
            <Cell col={8}>Lean UX, sketching, mid- & high-fidelity prototyping & storyboard</Cell>
          </Grid>
          <Grid noSpacing>
            <Cell col={2}>Tools Used</Cell>
            <Cell col={4}>Balsamiq & Sketch</Cell>
          </Grid>
        </div>
        <div style={{ height: 50 }} />
        {/* brief & role */}
        <Grid noSpacing>
          <Cell col={4}>
            <div className="sectionTitle">THE BRIEF</div>
          </Cell>
          <Cell col={2} />
          <Cell col={4}>
            <div className="sectionTitle">MY ROLE</div>
          </Cell>
        </Grid>
        <Grid noSpacing>
          <Cell col={4}>
            Most medical clinics require phone calls or in-person visits to book, reschedule or
            cancel appointments. We would like to transform the the appointment booking process by
            developing a mobile application to manage appointments online. The purpose of this
            project was to design a high-fidelity iOS and watchOS application for a medical clinic.
          </Cell>
          <Cell col={2} />
          <Cell col={4}>
            <ul>
              <li>Watch Interface Design: Sketch, mid- & high-fidelity prototype, storyboard.</li>
              <li>
                Mobile Interface Design: Collaborated with the team to develop the group sketch.
              </li>
              <li>
                User Testing: Designed tasks to test each feature, conducted two rounds of testing
                for both mobile and watch.
              </li>
            </ul>
          </Cell>
        </Grid>
        <div style={{ height: 50 }} />

        {/* ideation */}
        <div className="sectionTitle">IDEATION</div>
        <Grid noSpacing>
          <Cell col={4}>What assumptions do we have about the business and the users?</Cell>
          <Cell col={2} />
          <Cell col={4}>
            Acknowledging and declaring our assumptions enabled us to consciously validate them with
            users and stakeholders.
          </Cell>
        </Grid>

        {/* mobile interface design */}
        <div className="sectionTitle">
          <img className="sectionIcon" src={require("../assets/mobile.webp")} />
          MOBILE INTERFACE DESIGN
        </div>

        {/* navigation strucutre: tab bar */}
        <div className="centerContentContainer">
          <div className="subTitle">Navigation Structure: tab bar</div>
          <div className="content">
            Based on the individual sketches, a tab bar with hierarchical navigation structure is
            the most sensible way to navigate between different categories: appointments, walk-in
            info, doctors and accounts.
          </div>
        </div>

        {/* appointment views */}
        <div className="centerContentContainer">
          <div className="subTitle">Appointment views</div>
          <div className="content">
            The calendar provides a holistic view of the available dates, past appointments and
            upcoming appointments, while the list view is fast to skim through. We decided to keep
            both types of view and give users the freedom to toggle around the view they prefer
            using a segmented control.
          </div>
        </div>

        {/* when do we require singing in */}
        <div className="centerContentContainer">
          <div className="subTitle">When do we require signing in?</div>
          <div className="content">
            User should be able to view walk in hours, wait time, doctor's information without
            signing in. Booking, cancelling and rescheduling appointments will require signing in.
          </div>
        </div>

        {/* user testing feedback */}
        <div className="centerContentContainer">
          <div className="subTitle">User Testing Feedback</div>
          <div className="content">
            Using a clickable mid-fidelity prototype, we conducted the testing with 5 users. We
            incorporated their feedback in the high-fidelity prototype.
          </div>
        </div>

        {/* high-fidelity prototypes */}
        <div className="centerContentContainer">
          <div className="subTitle">High-fidelity Prototypes</div>
        </div>

        {/* watch interface design */}
        <div className="sectionTitle">
          <img className="sectionIcon" src={require("../assets/watch.webp")} />
          WATCH INTERFACE DESIGN
        </div>

        {/* group sketch */}
        <div className="centerContentContainer">
          <div className="subTitle">Group Sketch</div>
          <div className="content">
            The primary function for watch apps is to receive and look up information. With this
            understanding, we decided to display two types of information on the watch app: clinic
            walk-in information and upcoming appointments.
          </div>
        </div>

        {/* mid-fidelity prototype storyboard */}
        <div className="centerContentContainer">
          <div className="subTitle">Mid-fidelity Prototype Storyboard</div>
        </div>

        {/* user testing feedback */}
        <div className="centerContentContainer">
          <div className="subTitle">User Testing Feedback</div>
        </div>

        {/* high-fidelity prototypes storyboard */}
        <div className="centerContentContainer">
          <div className="subTitle">High-fidelity Prototype Storyboard</div>
        </div>

        {/* skills developed */}
        <div className="sectionTitle">SKILLS DEVELOPED</div>
        <ul>
          <li>
            Became more adept at focusing on users' outcome by discussing users' goals during the
            design process.
          </li>
          <li>
            Developed a deeper understanding of UI design, including using simple and plain language
            to explain tasks, and providing the purpose of tasks.
          </li>
          <li>Improved proficiency with iOS and watchOS design guideline.</li>
        </ul>
      </div>
    )
  }
}
