import { CharacterDto } from './character-dto';

export type UpdateCharacterDto = Partial<CharacterDto> &
  Pick<CharacterDto, 'id'>;
