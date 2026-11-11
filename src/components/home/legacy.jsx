import "../../styles/home.css";
import image from "/images/images (3).jpeg";

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <span className="legacy-hdr">Behind the Creative Identity</span>

      <div className="solid-header">
        Filmmaking, Music, and the Interest in Creating
      </div>
      <div className="legacy-main">
        <div className="legacy-main-txt">
          There is another side of Roumie’s career that deserves attention. His
          education in filmmaking and his involvement in music suggest a
          creative identity that extends beyond acting. His professional
          background identifies him as an actor, director, producer, and
          voice-over artist. His official website also provides insight into his
          musical interests, including his work as a drummer, songwriter, and
          collaborator. These interests help explain why his professional
          identity cannot be reduced to one television role. Acting may be the
          area through which he has reached the largest audience, but his
          interests have consistently involved other forms of creative
          expression. A filmmaker thinks about the relationship between images,
          sound, performance, and storytelling. A musician thinks about rhythm,
          interpretation, and emotional communication. An actor considers the
          internal life of a character and how that life can be translated into
          a believable performance. All three disciplines share a common
          foundation. They require imagination. They require patience. And they
          require an understanding of how people experience stories. Roumie’s
          background provides an interesting combination of these creative
          perspectives. It also leaves room for further exploration as his
          career develops.
        </div>
        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
