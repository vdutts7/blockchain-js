import * as crypto from 'crypto';

class Transaction {
  constructor(
    public amount: number,
    public payer: string, // public key
    public payee: string // public key    
  ){}

  toString() {
    return JSON.stringify(this);
  }

}

class Block {
  
}

class Chain {
  
}

class Wallet {
  
}