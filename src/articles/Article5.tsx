const Article5 = () => {
  return (
    <div>
      <h1 style={{ paddingLeft: 50 }}>compress and expand: </h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="fish1.png"
            style={{
              maxWidth: "100%",
              height: "auto",
              marginBottom: 20,
              marginTop: 50,
            }}
          />
          <img
            src="fish2.png"
            style={{ maxWidth: "100%", height: "auto", marginBottom: 20 }}
          />
          <img
            src="fish3.png"
            style={{ maxWidth: "100%", height: "auto", marginBottom: 20 }}
          />
          <img
            src="fish4.png"
            style={{ maxWidth: "100%", height: "auto", marginBottom: 20 }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <p>
            Nature copies art. In our moment, Massimo Bontempelli takes this
            thesis to its limits. According to a bizarre Bontempellian theory,
            drawn from summer meditation in an alpine town, in the beginning the
            earth was almost exclusively mineral. Only man and stone existed.
            Man sustained himself on mineral substances. But his imagination
            discovered the other two realms of nature. Artists imagined trees
            and animals. Plants and beings, having existed ideally in art, began
            to really exist in nature. With the planet furnished in this way,
            man’s imagination created new things. Machines appeared. Mechanical
            civilization was born. The earth was electrified and mechanized.
            And, after mechanization reached its height, the process was
            repeated in reverse. Minerals, vegetables, machines, etc., became
            reabsorbed by nature. The earth gradually became petrified and
            mineralized to the point that it returned to its primitive state.
            This evolution has been completed many times. Today the world is
            once again in a period of mechanics and mechanization
          </p>
          <p>
            —Mariátegui, <i>Reality and Fiction, 1926</i>
          </p>
          <br></br>
          <br></br>

          <p>
            Surrealism scorns the linear progression of history. Of course it
            does, because our dreams are not linear, and our memories are not
            linear, although walking through our daily lives we may sometimes
            perceive our lives and our pasts as a continuous straight vector.
            Surrealism, Mariátegui teaches us, is able to create an alternate
            dream of the past. It allows Bontempelli to conceive of history as a
            loop, not a line. Then, it lets us relax ourselves from the
            oppression of the timeline (that burdensome straight line of
            chronology). We can be free to twist ourselves into different
            shapes. We can reverse causalities, to percieve effect coming before
            cause. No one of us arrives in this world as an arrow, or as a ray,
            or… nature does not think in straight lines.
          </p>
          <p>
            Here is a fish, deconstructed from ten thousand fish and constructed
            from nothing. This fish does not exist. We are living, as
            Bontempelli and Mariátegui have pointed out, in a time of metal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article5;
