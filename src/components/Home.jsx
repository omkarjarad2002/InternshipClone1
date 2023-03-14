import React from "react";
import "./home.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Home() {
  return (
    <div className="home">
      <div className="home_first_div">
        <div className="home_main_div">
          <div className="home_hide_div"></div>
          <h1>moonrepo</h1>
          <h2>New era of productivity tooling</h2>
          <p>
            From build to deploy, moonrepo is a better way to manage codebases,
            save developer time, and boost your business.
          </p>
        </div>
      </div>
      <div className="home_second_div">
        <div className="product_div_1">
          <div className="content_1">
            <div className="heading_1">
              <p>A system for a solid foundation</p>
            </div>
            <div className="heading_2">
              <div className="img_div_ball">
                <img src="https://moonrepo.dev/brand/moon/icon.svg" />
              </div>
              <div className="heading_div_codebase">
                <h1>Supercharge your</h1>
                <h1>codebase</h1>
              </div>
            </div>
            <div className="heading_3">
              <p>
                For repositories with multiple projects, any number of
                languages, and team members constantly pushing changes, our task
                runner <a>moon</a> will help simplify the experience of working
                in and maintaining your codebase.
              </p>
            </div>
            <div className="heading_4">
              <button>
                <h3>Learn more about moon</h3>
              </button>
            </div>
          </div>
          <div className="content_2">
            <div className="content_2_first">
              <div className="content_2_first_1">
                <div className="content_2_first_1_img_head">
                  <img src="https://moonrepo.dev/brand/moon/icon.svg" />
                  <h2>Efficient task orchestation</h2>
                </div>
                <div className="content_2_first_1_p">
                  <p>
                    Never run the same task twice. With our smart hashing,
                    robust caching, and efficient task execution, moon will
                    avoid unnecessary work.
                  </p>
                </div>
              </div>
            </div>
            <div className="content_2_first">
              <div className="content_2_first_1">
                <div className="content_2_first_1_img_head">
                  <img src="https://moonrepo.dev/brand/moon/icon.svg" />
                  <h2>Better project organization</h2>
                </div>
                <div className="content_2_first_1_p">
                  <p>
                    Neatly organize your codebase, declare ownership
                    information, and simplify project discovery.
                  </p>
                </div>
              </div>
              <div className="content_2_first_2"></div>
            </div>
            <div className="content_2_first">
              <div className="content_2_first_1">
                <div className="content_2_first_1_img_head">
                  <img src="https://moonrepo.dev/brand/moon/icon.svg" />
                  <h2>Integrated development environment</h2>
                </div>
                <div className="content_2_first_1_p">
                  <p>
                    With our <a>integrated toolchain</a>, development
                    environments will be spun up in minutes, ensuring the exact
                    tools and versions are used across developers and machines.
                  </p>
                </div>
              </div>
              <div className="content_2_first_2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_third_div">
        <div className="product_div_2">
          <div className="product_div_2_img">
            <div className="product_div_2_img_1">
              <img src="https://moonrepo.dev/img/home/org.png" />
            </div>
            <div className="product_div_2_img_2">
              <img src="https://moonrepo.dev/img/home/repo.png" />
            </div>
          </div>
          <div className="content_3">
            <div className="heading_6_1">
              <p>A service to expand to the cloud</p>
            </div>
            <div className="heading_2">
              <div className="img_div_ball">
                <img src="https://moonrepo.dev/brand/moonbase/icon.svg" />
              </div>
              <div className="heading_div_codebase">
                <h1>Accelerate your </h1>
                <h1>pipelines</h1>
              </div>
            </div>
            <div className="heading_3">
              <p>
                With our hosted service <a>moonbase</a>, easily cache build
                artifacts to reduce CI times, gain insight into your CI
                pipelines, track the health of your repositories, and overall
                cut costs.
              </p>
            </div>
            <div className="heading_6">
              <button>
                <h3>Learn more about moonbase</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home_fourth_div">
        <div className="product_div_1">
          <div className="content_1">
            <div className="heading_5_1">
              <p>A toolchain for the modern era</p>
            </div>
            <div className="heading_2">
              <div className="img_div_ball">
                <img src="https://moonrepo.dev/brand/proto/icon.svg" />
              </div>
              <div className="heading_div_codebase">
                <h1>Automate your </h1>
                <h1>environments</h1>
              </div>
            </div>
            <div className="heading_3">
              <p>
                Remove the hassle of managing and enforcing specific versions of
                programming languages across teams or projects. With
                <a>proto</a>, our modern toolchain manager, this entire workflow
                is automated away through a single tool.
              </p>
            </div>
            <div className="heading_5">
              <button>
                <h3>Learn more about proto</h3>
              </button>
            </div>
          </div>
          <div className="content_5">
            <div className="content_5_first">
              <div className="content_5_first_1">
                <div className="content_5_first_1_img_head">
                  <img src="https://moonrepo.dev/brand/proto/icon.svg" />
                  <h2>Multi-language support</h2>
                </div>
                <div className="content_5_first_1_p">
                  <p>
                    Manage versions of multiple languages and dependency
                    managers through a single interface. A single source of
                    truth.
                  </p>
                </div>
              </div>
            </div>
            <div className="content_5_first">
              <div className="content_5_first_1">
                <div className="content_2_first_1_img_head">
                  <img src="https://moonrepo.dev/brand/proto/icon.svg" />
                  <h2>Contextual version detection</h2>
                </div>
                <div className="content_5_first_1_p">
                  <p>
                    Detects and infers versions and semantics from a language's
                    ecosystem for maximum compatibility and interoperability.
                  </p>
                </div>
              </div>
              <div className="content_5_first_2"></div>
            </div>
            <div className="content_5_first">
              <div className="content_5_first_1">
                <div className="content_5_first_1_img_head">
                  <img src="https://moonrepo.dev/brand/proto/icon.svg" />
                  <h2>Lightspeed interface</h2>
                </div>
                <div className="content_5_first_1_p">
                  <p>
                    Download, install, and run tools with lightspeed, thanks to
                    our Rust based foundation.
                  </p>
                </div>
              </div>
              <div className="content_5_first_2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_fifth_div">
        <div className="product_div_4">
          <div className="product_div_4_heading">
            <h1>Used by these innovative companies</h1>
          </div>
          <div className="product_div_4_d_g_plus">
            <div className="product_div_4_d">
              <img src="" />
              <h3>Depot</h3>
            </div>
            <div className="product_div_4_g">
              <h2>(GALLERY)</h2>
            </div>
            <div className="product_div_4_plus">
              <AiOutlinePlusCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
