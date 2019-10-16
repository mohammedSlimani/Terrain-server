export default function MakeBuildUser({ Id }){
    return function makeUser({ id, facebookId, image, name }){
        if(!Id.isValid(id)){
            throw new Error('User Id not valid');
        }
        if(!facebookId){
            throw new Error('User Doesnt have valid facebookID')
        }
        if(!image){
            throw new Error('User doesnt have Image')
        }
        if(!name){
            throw new Error('USer doenst have Name')
        }

        return Object.freeze({
            getId : () => id,
            getFacebookId : () => facebookId,
            getImage: () => image,
            getName : () => name  
        })
    }
}