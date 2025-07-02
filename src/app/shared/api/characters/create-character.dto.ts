import { CharacterDto } from './character.dto';

export type CreateCharacterDto = Omit<CharacterDto, 'id'>;
