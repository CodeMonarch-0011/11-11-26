import "../../styles/home.css";
import image from "/images/images (1).jpeg";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">The Creative Foundation</span>

      <span className="solid-header">More Than an Actor</span>

      <div className="rise-main">
        <div className="rise-txt">
          One of the interesting aspects of Roumie’s background is the variety
          of creative interests he developed outside conventional acting. Music,
          particularly drumming, has been an important part of his life since
          childhood. His official musician biography traces his interest in
          percussion to his earliest years, with his formal musical journey
          beginning around the age of eleven. What started as a childhood
          fascination eventually became a serious creative pursuit. Roumie
          played with different bands and participated in musical projects
          across Southern California, Las Vegas, the East Coast, and Ireland. He
          also performed at the legendary New York music venue CBGB with
          musician Joe Tizzio. His involvement in music extended beyond simply
          playing an instrument. He contributed to songwriting, recording, and
          producing, including work connected with the original EP Unbreakable.
          This side of his identity provides an interesting perspective on the
          person behind the acting career. Music requires rhythm,
          interpretation, collaboration, and an understanding of emotional
          expression. Those qualities also have a place in acting. Whether
          performing a character, playing music, or participating in the
          development of a film, the underlying interest is similar: finding
          ways to communicate something meaningful through creative expression.
          Roumie has never been limited to one artistic discipline. And that
          broader creative curiosity would continue to influence his
          professional journey.
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
