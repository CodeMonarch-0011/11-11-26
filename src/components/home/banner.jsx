import "../../styles/home.css";
import image from "/images/images.jpeg";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-img">
        <img src={image} />
      </div>

      <div className="banner-text">
        <span>Jonathan Roumie</span>
        <span>The Man Behind the Most Recognized Role of His Career</span>
        <div>
          <div>
            Some actors spend years searching for the role that will define
            their careers. Others discover that the role they were meant to play
            is also the one that will introduce them to the world. Jonathan
            Roumie belongs to an interesting category of performers whose
            professional journey took years to reach its defining moment. An
            actor, filmmaker, voice-over artist, musician, and creative
            storyteller, Roumie has spent much of his career working across
            different areas of the entertainment industry. His experience
            includes television dramas, independent films, animation, voice
            acting, and projects exploring historical and faith-based
            storytelling.
            <br />
            To millions of viewers around the world, however, he is now
            recognized as the man who brings Jesus Christ to life in the
            internationally successful television series The Chosen. It is a
            role that has transformed the visibility of his career and
            introduced his work to audiences far beyond the traditional
            boundaries of television entertainment. But there is a much longer
            story behind that recognition.
          </div>
          <div>
            Before the international attention, before the interviews, before
            the global audiences and the extraordinary responsibility of
            portraying one of history’s most significant figures, Roumie was a
            New York-born actor trying to establish himself in an industry that
            offered no guarantees. <br /> He worked. He auditioned. He explored
            different creative opportunities. And, for a considerable period, he
            experienced the uncertainty that comes with pursuing a career in
            entertainment. His journey is not simply a story about landing a
            breakthrough role. It is a story about perseverance, creative
            ambition, personal conviction, and an unexpected opportunity that
            would change the direction of his life. Perhaps what makes Jonathan
            Roumie’s story particularly compelling is that the role that made
            him internationally recognizable was not the beginning of his
            relationship with the character. It was the culmination of years of
            experiences that had gradually brought him toward it.
          </div>
        </div>

        {/* <button onClick={openContactPopup}>Get in Touch</button> */}
      </div>
    </section>
  );
}
