import React from "react";
import { useNavigate} from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const log=()=>{
    navigate("/login");
  }
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="" />
          <a class="navbar-brand" href="/">
            Start Bootstrap
          </a>

          <div class="dropdown">
            <a
              class="btn btn-whitesmoke dropdown-toggle"
              href="#th"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
            >
              Themes
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#admin">
                  Admin & Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#page">
                  Landing Pages
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#vo">
                  Business & Corporate
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#re">
                  Protfolio & Resume
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              class="btn btn-whitesmoke dropdown-toggle"
              href="#h"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
            >
              Templates
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
                <a class="dropdown-item" href="#da">
                  Admin & Dashboard
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#pa">
                  Landing Pages
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              class="btn btn-whitesmoke dropdown-toggle"
              href="#dr"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
            >
              Bundles
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#html">
                  Pro Bootstrap HTML Bundle
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#bundle">
                  Pro Angular Bundle
                </a>
              </li>
            </ul>
          </div>
          <li className="form">
            <a href="/form">Forms</a>
          </li>
          <div class="dropdown">
            <a
              class="btn btn-whitesmoke dropdown-toggle"
              href="#dr"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
            >
              Resourses
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#item">
                  Snippets
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#base">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#guide">
                  Guides
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a className="blog" href="/blog">
          Blog
        </a>
        <button className="log" onClick={log}>login</button>
      </nav>
    </div>
  );
}
