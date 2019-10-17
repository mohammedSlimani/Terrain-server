export default function MakeGame({Id}){
    return function MakeGame({id,authorId,startingTime,endingTime,description}){
        if(!Id.isValid(id)){
            return new Error('Id not valid')
        }
        if(!authorId){
            throw new Error('Game Doesnt have valid authorID')
        }
        if(!startingTime){
            throw new Error('Game doesnt have startting time')
        }
        if(!endingTime){
            throw new Error('Game doesnt have ending time')
        }
        if(!description){
            throw new Error('Game doesnt have desciption ')
        }
         return Object.freeze({
             getId : () => id,
             getauthorId : () => authorId,
             getstartingTime : () => startingTime,
             getEndingTime : () => endingTime,
             getDescription : () => description,
         })

    }
}