import { Injectable } from '@nestjs/common';
import { CreateEthereumDto } from './dto/create-ethereum.dto';
import { UpdateEthereumDto } from './dto/update-ethereum.dto';
import { ethers } from "ethers";

@Injectable()
export class EthereumService {
  create(createEthereumDto: CreateEthereumDto) {
    return 'This action adds a new ethereum';
  }

  findAll() {
    return `This action returns all ethereum`;
  }

  async findOne(address: string) {
    const validAddress = ethers.utils.getAddress(address)
    console.log('validAddress', validAddress);
    
    const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER);
    const retriviedAddress =  await provider.getBalance(address)
    console.log('address',  retriviedAddress.toString());
    const balance = ethers.utils.formatEther(retriviedAddress.toString())
    console.log('balance',  balance);
    return `This action returns a ${address} ethereum`;
  }

  update(id: number, updateEthereumDto: UpdateEthereumDto) {
    return `This action updates a #${id} ethereum`;
  }

  remove(id: number) {
    return `This action removes a #${id} ethereum`;
  }
}
