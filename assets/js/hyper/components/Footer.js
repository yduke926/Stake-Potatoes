import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer>
        <div className="container">
            <nav className="menu">
                <a href="#">Our Story</a>
                <a href="#">Reviews</a>
                <a href="#">Special Menu</a>
                <a href="#">Reservations</a>
                <a href="#">Contact Us</a>
            </nav>

            <ul className="social-media">
            <li>
                <a href="http://www.twitter.com" target="new">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="http://www.facebook.com" target="new">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="http://www.instagram.com" target="new">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
            </ul>

            <div className="copyright">
            © 2018 S&P 
            </div>
        </div>
    </footer>
  )
}