import { Arrow, Border } from "../icons/headerIcons";
import MarqueeBanner from "./MarqueeBanner";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data";

const SectionSecond = () => {
  return (
    <section
      data-slice-type="home_page_projects"
      data-slice-variation="default"
      className="home-projects home-page-projects"
    >
      <MarqueeBanner />

      <div className="home-projects-items">
        <div className="home-projects-top">
          <div className="home-projects-left">
            <ProjectItem {...projects[0]} />
            <ProjectItem {...projects[1]} />
          </div>

          <div className="home-projects-right">
            <ProjectItem {...projects[2]} />
          </div>
        </div>

        <div className="home-projects-bottom-block">
          <ProjectItem {...projects[3]} />
        </div>

        <div className="home-projects-ctas">
          <a href="/work" className="link-with-arrow cta">
            <div className="arrow-link undefined">
              <Border className="border" />
              <Arrow width="154" height="150" className="arrow" />
              <Arrow width="154" height="150" className="arrow arrow-bis" />
            </div>
            <span>Explore more</span>
          </a>
        </div>
      </div>

      <div className="grid-padding home-projects-bottom">
        <div className="home-projects-bottom-title">
          <div>
            <div>
              <div className="home-page-project-line">
                <div>WHY leading brands</div>
              </div>
              <div className="home-page-project-line">
                <div>partner with inertia.</div>
              </div>
            </div>
          </div>
          <div className="home-page-projects-arrow">
            <Arrow />
          </div>
        </div>

        <div className="home-projects-bottom-text-ctn">
          <div className="home-projects-bottom-text">
            <h2>
              From CGI product films to viral 3D billboards, we are pioneering
              3D Imagery & Motion Design that redefines visual storytelling. See
              how we help brands make a mark.
            </h2>
          </div>
          <a href="/work" className="link-with-arrow">
            <div className="arrow-link undefined">
              <Border className="border" />
              <Arrow width="154" height="150" className="arrow" />
            </div>
            <span>Discover more work</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionSecond;
