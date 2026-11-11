import "../../styles/home.css";
import image from "/images/images (4).jpeg";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">The Voice Behind the Character</span>
      <span className="solid-header">
        An Entirely Different Form of Storytelling
      </span>
      <div className="philosophy-main">
        <div className="philosophy-list">
          <div>
            Roumie’s creative career also includes a substantial interest in
            voice performance. While many viewers recognize his face
            immediately, his voice work has allowed him to participate in
            productions where physical appearance is not part of the
            performance. His credits include animated films and television
            projects, including Night at the Museum: Kahmunrah Rises Again,
            Castlevania: Nocturne, and Tomb Raider: The Legend of Lara Croft. He
            also voices Jesus in The Chosen Adventures, an animated extension of
            the world created by the original series. Voice acting requires a
            different approach to character development. An actor must
            communicate emotional changes, personality, intention, and
            atmosphere through vocal expression. There is no reliance on
            physical gestures or facial expressions to complete the performance.
            Everything depends on interpretation and delivery. For someone with
            Roumie’s background in music and filmmaking, this is another
            creative avenue that fits naturally into his wider professional
            interests. It demonstrates that his career is not exclusively tied
            to traditional on-screen performances. He has continued exploring
            different ways of participating in the entertainment industry.
            {/* <ul>
              <li>
                Intelligence as Strength Her greatest characters succeed because
                they think.
              </li>

              <li>
                Emotional Precision She avoids excess and trusts subtlety.
              </li>

              <li>
                Fearless Material She repeatedly chooses challenging stories.
              </li>

              <li>
                Privacy as Principle She protects the distinction between public
                work and private life.
              </li>

              <li>
                Lifelong Curiosity Whether acting, directing, or studying,
                curiosity drives her choices.
              </li>
            </ul> */}
          </div>
        </div>
        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
