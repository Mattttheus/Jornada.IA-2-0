export default{

    jamp: new KeyboardEvent( 'keydown ', {key : 'Space', keyCode: 32}),

    dispatchEvent(event){

        document.dispatchEvent(this[event]);
    }
}