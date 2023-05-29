import React from 'react';
import noActorPhoto from '../../images/noActorPhoto.jpg';
import {
  ActorCard,
  PhotoCardWrap,
  Img,
  CardSlider,
  CharacterText,
  NameBlock,
  NameText,
} from './CastListItem.styled';

const CastListItem = ({ actor }) => {
  let actorPhoto = noActorPhoto;
  if (actor.profile_path) {
    actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  }

  return (
    <ActorCard>
      <PhotoCardWrap>
        <Img src={actorPhoto} alt={actor.name} />
        <CardSlider>
          <CharacterText>{actor.character}</CharacterText>
        </CardSlider>
      </PhotoCardWrap>

      <NameBlock>
        <NameText>{actor.name}</NameText>
      </NameBlock>
    </ActorCard>
  );
};

export default CastListItem;
