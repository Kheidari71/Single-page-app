
import { Link } from "react-router-dom";
export default function NoMatch() {
  return (
    <div className="ContactContainer">
      <p className="ContactHead">Lets start working together</p>

      {/*form here*/}
      <form className="form" action="">
        <input id="Name" type="text" placeholder="Your Name" /><br />
        <input id="Name" type="text" placeholder="Your Name" /><br />
        <textarea className="text" name="" id="" cols="" rows="" placeholder="Your message"></textarea><br />
        <button id="send">Send</button>
      </form>
      <div>
        {/*icons here*/}
        <div className="icons">
          <Link to="https://www.linkedin.com/in/kiana-heidari-8a32aa242/"><i class="fa-brands fa-linkedin-in"></i></Link><br />
          <Link to="https://www.linkedin.com/in/kiana-heidari-8a32aa242/"><i class="fab fa-github"></i></Link><br />
        </div>
        <Link className="emailAddress" to="https://kiana-heidari.com">www.kiana-heidari.com</Link><br />
        <button className="EmaiLlink"><a className="EmaiLlink" href="mailto:Kiana_hedari71@yahoo.com" rel="noopener noreferrer" target="_blank">Say Hello</a></button>
      </div>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}