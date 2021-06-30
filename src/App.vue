<template>
  <div id="app">
    <!-- HEADER -->
    <header id="header">
      <nav>
        <ul>
          <li>
            <router-link to="/capstones">Index</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- ROUTER VIEW -->
    <router-view />

    <!-- FOOTER -->
    <footer id="footer">
      <div class="inner">
        <section>
          <img
            src="https://anyonecanlearntocode.com/assets/actualize-logo-7cfc296a2f85a02cf29c8ee89707b1da416d72b05fe1d582c9eb9a2888d7dc18.png"
            alt=""
            width="100"
            height="100"
            class="actualize"
          />
          <hr width="50%" />
          <h2 class="footer-text">Explore Actualize</h2>
          <a href="https://anyonecanlearntocode.com/" class="footer-text">Actualize Coding Bootcamp</a>
          <br />
          <br />
          <h2 class="footer-text">Have a question for us?</h2>
          <p class="footer-text">
            Ask away! We'll get back to you as quickly as we can.
            <br />
            You can also call us directly at (773) 766-5965.
            <br />
            Looking to hire an Actualize grad? Email us directly at
            <a href="hiring@actualize.co" class="footer-text">hiring@actualize.co</a>
            .
          </p>
        </section>
      </div>
    </footer>
  </div>
</template>
