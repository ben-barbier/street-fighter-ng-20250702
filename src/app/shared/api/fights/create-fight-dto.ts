import { FightDto } from './fight-dto';

export type CreateFightDto = Pick<
  FightDto,
  'characterOneId' | 'characterTwoId'
>;
