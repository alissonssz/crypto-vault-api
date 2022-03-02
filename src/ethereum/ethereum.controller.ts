import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EthereumService } from './ethereum.service';
import { CreateEthereumDto } from './dto/create-ethereum.dto';
import { UpdateEthereumDto } from './dto/update-ethereum.dto';
import { ethers } from "ethers";

@Controller('ethereum')
export class EthereumController {
  constructor(private readonly ethereumService: EthereumService) {}

  @Post('/create-account')
  create(@Body() createEthereumDto: CreateEthereumDto) {
    return this.ethereumService.create(createEthereumDto);
  }

  @Get()
  findAll() {
    return this.ethereumService.findAll();
  }

  @Get('/address/:address')
  findOne(@Param('address') adress: string) {
    return this.ethereumService.findOne(adress);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEthereumDto: UpdateEthereumDto) {
    return this.ethereumService.update(+id, updateEthereumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ethereumService.remove(+id);
  }
}
