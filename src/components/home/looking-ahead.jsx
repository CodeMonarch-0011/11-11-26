import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">A Story Still Unfolding</span>

      <span className="solid-header">
        More Than the Character Audiences Recognize
      </span>

      <div>
        Jonathan Roumie’s career is an evolving collection of performances,
        creative experiences, personal convictions, and opportunities that have
        taken him far beyond the boundaries of conventional television acting.
        From his early beginnings in New York to his education in filmmaking,
        from his experiences in music and independent productions to his years
        working across American television, his professional journey reflects a
        performer with interests extending well beyond a single discipline. Then
        came The Chosen. A project that began with a relatively modest vision
        became an international phenomenon, placing Roumie at the centre of a
        story with extraordinary cultural and spiritual significance. It changed
        the scale of his recognition. It introduced his work to millions of
        people. And it gave him an opportunity to portray a character whose
        significance cannot easily be measured through ordinary entertainment
        industry standards. Yet the most interesting part of his story may be
        that the role has not erased everything that came before it. He remains
        an actor. A filmmaker. A musician. A voice performer. And a creative
        individual with more possibilities ahead. His career is not simply
        defined by the character he plays. It is also defined by the experiences
        that prepared him to play it, the convictions that influence how he
        approaches his work, and the creative opportunities that remain open to
        him. Some actors become famous because they find the right role. Others
        discover that the right role gives the world an opportunity to
        appreciate a much longer journey. Jonathan Roumie belongs to the latter
        category. The world may recognize him as Jesus. But his story began long
        before the sandals, the robes, and the cameras. And it is still being
        written.
      </div>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
