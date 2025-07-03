import { CharacterDto } from '../../shared/api/characters/character-dto';
import { CountryDto } from '../../shared/api/countries/country-dto';

export type Character = CharacterDto & { countryDetails: CountryDto };
