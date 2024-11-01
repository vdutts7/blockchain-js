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
  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts = Date.now()
  ){}
  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash('SHA256');
    hash.update(str).end()
    return hash.digest('hex')
  }
}

class Chain {
  
}

class Wallet {
  
}