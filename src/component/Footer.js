import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div class="container my-5">
          <footer style={{ backgroundcolor: "#87CEFA" }}>
            <div class="container p-4">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-6">
                  <h5
                    class="mb-3"
                    style={{
                      letterspacing: "2px",
                      color: "grey",
                      fontSize: "27px",
                    }}
                  >
                    Start Bootstrap
                  </h5>
                  <p style={{ color: "grey", fontSize: "20px" }}>
                    Free & premium UI tools to help you build better websites
                  </p>
                  <br />
                  <a 
                    href="#f"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#t">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#g">
                  <i class="fa-brands fa-github"></i>
                  </a>
                </div>
                <div class="col-lg-2 col-md-6 mb-6">
                  <h5
                    class="mb-3"
                    style={{ letterspacing: "2px", color: "grey" }}
                  >
                    PRODUCTS
                  </h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        Themes
                      </a>
                    </li>
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        Templates
                      </a>
                    </li>
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        Snippets
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        Guides
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-6">
                  <h5
                    class="mb-3"
                    style={{ letterspacing: "2px", color: "grey" }}
                  >
                    RESOURCES
                  </h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        Blog
                      </a>
                    </li>
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "5px",
                        }}
                      >
                        Bootstrap Resources
                      </a>
                    </li>
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "5px",
                        }}
                      >
                        SB Angular Inspector
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-6">
                  <h5
                    class="mb-3"
                    style={{ letterspacing: "2px", color: "grey" }}
                  >
                    SUPPORT
                  </h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        Knowledge Base
                      </a>
                    </li>

                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "5px",
                        }}
                      >
                        Custom Development
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-6">
                  <h5
                    class="mb-3"
                    style={{ letterspacing: "2px", color: "grey" }}
                  >
                    COMPANY
                  </h5>
                  <ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "10px",
                        }}
                      >
                        About Us
                      </a>
                    </li>

                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "5px",
                        }}
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li class="mb-1">
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "5px",
                        }}
                      >
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        style={{
                          color: "grey",
                          textDecoration: "none",
                          marginTop: "5px",
                        }}
                      >
                        Licence
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <div
              class="text-center p-3"
              style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
            >
              Copyright © Start Bootstrap LLC 2021
              <p>
                Website built with SB UI Kit Pro and SB Admin Pro with
                Illustrations by Stories by Freepik.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
