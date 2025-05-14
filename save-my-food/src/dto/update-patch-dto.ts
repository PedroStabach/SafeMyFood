import { createUserDTO } from "./create-user-dto";
import {PartialType} from "@nestjs/mapped-types";

export class updatePatchDTO extends PartialType(createUserDTO) {

}