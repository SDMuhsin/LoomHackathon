import { model, Schema } from "mongoose";

interface Game {
    name: string;
    code: string;
    maxPlayers:number,
    maxRounds:number,
    gameMaster:string,
    players:any
}

const GameSchema = new Schema<any>({
    name: {type: String, required: true},
    code: {type: String, required:true},
    maxPlayers:{type:Number,required:true},
    maxRounds:{type:Number,required:true},
    gameMaster:{type:String,required:true},
    players:[Schema.Types.Mixed]

    
},{timestamps:true});

GameSchema.index({createdAt:1},{expireAfterSeconds:60*60*4})
const GameModel = model<any>('Game', GameSchema);

export { GameModel, Game };