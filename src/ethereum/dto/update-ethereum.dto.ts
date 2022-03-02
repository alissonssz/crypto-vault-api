import { PartialType } from '@nestjs/mapped-types';
import { CreateEthereumDto } from './create-ethereum.dto';

export class UpdateEthereumDto extends PartialType(CreateEthereumDto) {}
