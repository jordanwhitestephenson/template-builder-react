import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: "b05b18f4be08bfbcea5f559c4fe55a15",
  secret: "55da120b3310511ef1ac985a9965e621"
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({
        output: "full",
        location: "Denver, CO"
      })
      .then(data => {
        console.log(data);
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets: pets
        });
      });
  }

  render() {
    return (
      <div className="search">
        {" "}
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(". ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}{" "}
      </div>
    );
  }
}
export default Results;
