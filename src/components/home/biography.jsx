import "../../styles/home.css";
import image from "/images/jonathan-roumie-the-chosen.webp";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">Before the Recognition</span>

      <span className="solid-header">A New York Beginning</span>

      <div className="biography-txt">
        <div>
          Jonathan Roumie was born and raised in New York City, where his early
          environment helped shape his interest in creative expression. Unlike
          performers whose professional identities develop exclusively through
          acting classes or traditional theatre training, Roumie’s educational
          background included a broader interest in the filmmaking process. He
          attended the School of Visual Arts in New York, graduating with a
          degree in filmmaking before eventually relocating to Los Angeles to
          pursue acting professionally. That distinction is worth remembering.
          Roumie did not approach entertainment exclusively from the perspective
          of someone who wanted to appear in front of a camera. He had an
          interest in how films were constructed, how stories were communicated,
          and how the different creative responsibilities behind a production
          worked together. His education provided an understanding of filmmaking
          that would remain relevant throughout his career. Long before
          audiences became familiar with his performances, he was already
          developing an appreciation for storytelling as a complete creative
          process. His professional ambitions would eventually take him from New
          York to California, where he began pursuing the opportunities that
          would establish his place in the entertainment industry.
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
