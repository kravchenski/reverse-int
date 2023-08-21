module.exports = function reverse (n) {
    let reverseInt = String(n).replace('-', '')
    let newInt = ''
    if (reverseInt[reverseInt - 1] == '-'){
        for (let i = 1; i <= reverseInt.length; i++) {
            newInt += reverseInt[reverseInt.length - i]
    
        }
        return newInt

    }
    else{
        for (let i = 1; i <= reverseInt.length; i++) {
            newInt += reverseInt[reverseInt.length - i]
    
        }
    }

    return newInt
}  

