import React from "react";
import { Carousel } from "react-bootstrap";

const Carrous = () => {
  return (
    <div
      style={{
        width: "1350px",
        height: "400px",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <img
            style={{
              width: "1350px",
              height: "400px",
            }}
            className="d-block w-100"
            src="https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABa1AtoepLPm3zlHXgbV4tmDFqFxcjDN2xJJEFHi9u8BbMdu0MleNJC-CErJOCFJeIosljeCUloUp7f0UbiFvM79PUfTbGHA0HIhA.jpg?r=8ca"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Massacre à la tronçonneuse</h3>
            <p>
              Dans cette suite, des influenceurs qui essaient de ranimer une
              ville fantôme du Texas croisent le chemin de Leatherface,
              l'abominable tueur au masque en peau humaine…
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              width: "1350px",
              height: "400px",
            }}
            className="d-block w-100"
            src="https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYg6wu-TW291EDgfF9tyKFWin_D60W21WquFJLugmBDGIm6lDmtcv23ZJxN2ib7FIbOG_rLIZRlcVwMGsd0pUDyyGp48M5evKRoF.jpg?r=491"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Squid Game</h3>
            <p>
              Tentés par un prix alléchant en cas de victoire, des centaines de
              joueurs désargentés acceptent de s'affronter lors de jeux pour
              enfants aux enjeux mortels.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              width: "1350px",
              height: "400px",
            }}
            className="d-block w-100"
            src="https://occ-0-4609-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXWONtyXpz9juFBK4YOmhwk21rGLupxfOREs_i6qVEO7Ll7MghdeDb9Rm8HofzMybhv7uyS93ITPBfHEvWZN_y_rE7cJtUgpMWL9.jpg?r=82a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Vikings: Valhalla</h3>
            <p>
              Dans cette suite de "Vikings", un siècle s'est écoulé et une
              nouvelle génération de héros légendaires aspire à forger son
              destin pour entrer dans l'histoire.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrous;
