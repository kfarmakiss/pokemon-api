import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  
  getPokemonJSON() {
    const pokemon = fs.readFileSync('src/pokemon.json', 'utf-8');
    console.log(pokemon);
    return JSON.parse(pokemon);
}; 
}

