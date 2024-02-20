import 'dotenv/config';

import { getKeypairFromEnvironment } from '@solana-developers/helpers';
import { Connection, LAMPORTS_PER_SOL, PublicKey, PublicKeyInitData } from '@solana/web3.js';

const publicKey = new PublicKey(process.env.PUBLIC_KEY as PublicKeyInitData)

const connection = new Connection("https://api.devnet.solana.com", "confirmed")
const balanceInLamp = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamp / LAMPORTS_PER_SOL
console.log(`The balance for the wallet in the address${publicKey} is ${balanceInSol}`)
