import React from "react";
import PersonCard from "../components/actorCard";
import SamplePerson from "./samplePerson";

export default {
  title: "Actor Page/ActorCard",
  component: PersonCard,
};

export const Basic = () => {
  return (
    <PersonCard
      person={SamplePerson}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, poster_path: undefined };
  return (
    <PersonCard
      person={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";