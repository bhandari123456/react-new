import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="theme">
        <div className="container">
          <div class="row">
            <div class="col">
              <h1 className="col1">Bootstrap themes, templates,</h1>
              <h1 className="col2">
                and UI tools to help you <strong>start</strong>
              </h1>
              <h1 className="col3">
                <strong>your next project!</strong>
              </h1>
              <p className="col4">
                Start Bootstrap creates free, open source, MIT license,
                Bootstrap<b>themes, templates,</b> and<b>code snippets</b> for
                you to use on any project, <b>guides</b> to help you learn more
                about designing and developing with the Bootstrap framework, and
                <b> premium Bootstrap UI products.</b>
              </p>
              <br />
              <button type="button" class="btn btn-danger">
                Browse Templates and Themes
              </button>
            </div>
            <div class="col">
              <img
                src="https://startbootstrap.com/assets/img/freepik/content-pana.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr className="h" />
      <br />
      <br />
      <div class="d-flex flex-row">
        <div className="parent1">
          <div class="admin">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admindiv">
            <h4 className="admintext1">SB Admin Pro</h4>{" "}
            <button type="button" class="btn btn-primary">
              Pro
            </button>
            <h5 className="admintext2">A premium Bootstrap admin theme</h5>
            <p className="adminnum">5,423</p>
          </div>
        </div>
        <div className="parent2">
          <div class="admin2">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/themes/sb-admin-2.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin2div">
            <h4 className="admin2text1">SB Admin 2</h4>{" "}
            <button type="button" class="btn btn-success">
              Free
            </button>
            <h5 className="admin2text2">A free Bootstrap admin theme</h5>
            <p className="admin2num">2,539,730</p>
          </div>
        </div>
        <div className="parent3">
          <div class="admin3">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/premium/material-admin-pro.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin3div">
            <h4 className="admin3text1">Material Admin Pro</h4>{" "}
            <button type="button" class="btn btn-primary">
              Pro
            </button>
            <h5 className="admin3text2">A premium Bootstrap admin theme</h5>
            <p className="admin3num">818</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div className="parent4">
          <div class="admin4">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/themes/personal.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin4div">
            <h4 className="admin4text1">Personal</h4>{" "}
            <button type="button" class="btn btn-success">
              Free
            </button>
            <h5 className="admin4text2">A personal website theme</h5>
            <p className="admin4num">2,407</p>
          </div>
        </div>
        <div className="parent5">
          <div class="admin5">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin5div">
            <h4 className="admin5text1">SB UI Kit Pro</h4>{" "}
            <button type="button" class="btn btn-primary">
              Pro
            </button>
            <h5 className="admin5text2">A premium Bootstrap UI Kit</h5>
            <p className="admin5num">2,481</p>
          </div>
        </div>
        <div className="parent6">
          <div class="admin6">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/templates/sb-admin.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin6div">
            <h4 className="admin6text1">SB Admin</h4>{" "}
            <button type="button" class="btn btn-success">
              Free
            </button>
            <h5 className="admin6text2">A free Bootstrap admin template</h5>
            <p className="admin6num">1,465,125</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div className="parent7">
          <div class="admin7">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/themes/freelancer.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin7div">
            <h4 className="admin7text1">Freelancer</h4>{" "}
            <button type="button" class="btn btn-success">
              Free
            </button>
            <h5 className="admin7text2">A one page freelancer theme</h5>
            <p className="admin7num">1,232,558</p>
          </div>
        </div>
        <div className="parent8">
          <div class="admin8">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/themes/agency.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin8div">
            <h4 className="admin8text1">Agency</h4>{" "}
            <button type="button" class="btn btn-success">
              Free
            </button>
            <h5 className="admin8text2">A one page agency theme</h5>
            <p className="admin8num">1,232,005</p>
          </div>
        </div>
        <div className="parent9">
          <div class="admin9">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/themes/creative.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin9div">
            <h4 className="admin9text1">Creative</h4>{" "}
            <button type="button" class="btn btn-success">
              Free
            </button>
            <h5 className="admin9text2">A one page creative theme</h5>
            <p className="admin9num">1,076,054</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div className="parent10">
          <div class="admin10">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin10div">
            <h4 className="admin10text1">SB Admin Pro Angular</h4>{" "}
            <button type="button" class="btn btn-primary">
              Pro
            </button>
            <h5 className="admin10text2">
              A premium Angular 13 admin template
            </h5>
            <p className="admin10num">443</p>
          </div>
        </div>
        <div className="parent11">
          <div class="admin11">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin11div">
            <h4 className="admin11text1">SB UI Kit Pro Angular</h4>{" "}
            <button type="button" class="btn btn-primary">
              Pro
            </button>
            <h5 className="admin11text2">A premium Angular 13 UI Kit</h5>
            <p className="admin11num">231</p>
          </div>
        </div>
        <div className="parent12">
          <div class="admin12">
            <img
              src="https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-vue.jpg"
              alt=""
            />
          </div>
          <br />
          <br />
          <div className="admin12div">
            <h4 className="admin12text1">SB UI Kit Pro Vue</h4>{" "}
            <button type="button" class="btn btn-primary">
              Pro
            </button>
            <h5 className="admin12text2">A premium Vue.js UI Kit</h5>
            <p className="admin12num">249</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="sub">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h3 className="subtex1">
                Want more Bootstrap themes, templates, and UI tools?
              </h3>
              <h4 className="subtex2">
                Subscribe to get updated when new Bootstrap related products
                arrive!
              </h4>
              <br />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your MailID"
                required
              />
              <button type="button" class="btn btn-danger">
                Subscribe
              </button>
              <p className="subtex3">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
            <div className="col-4">
              <img src="https://startbootstrap.com/assets/img/freepik/wall-post-pana.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <Footer/>
    </>
  );
}
