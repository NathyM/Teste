import { OcupationEnum } from "../EnumOccupation";

export default interface IPerson{
  id:string
  name: string,
  registration: string,
  birthDate: string | Date | undefined,
  occupation: OcupationEnum,
  team: {
    id: string,
    nome: string,
  }
 };