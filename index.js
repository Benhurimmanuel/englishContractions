const contractionsList = require("./contractionsList")


class Contractions {
    constructor() {
        this.specialCharacters = [",", "/", "_", "-"]
    }
    addContraction = (word, value) => {
        if (contractionsList.get(word)) {
            contractionsList.get(word).push(value)
            return 1
        }
        else {
            return contractionsList.set(word, [value])
        }
    }
    getContraction = (word) => {
        if (contractionsList.get(word)) return contractionsList.get(word).join("/")
        else return 0
    }
    hasContraction = (word) => {
        if (contractionsList.get(word)) return 1
        else return 0
    }
    applyContraction = (sentence) => {
        this.wordArray = sentence.toLowerCase().split(" ")
        let cleanElement

        this.wordArray.forEach((element, index) => {
            for (let i in this.specialCharacters) {
                if (element.includes(this.specialCharacters[i])) {
                    cleanElement = element.replace(",", "")
                    break;
                }
                else {
                    cleanElement = element
                }
            }
            const contractionWord = this.getContraction(cleanElement)
            if (contractionWord) {
                this.wordArray[index] = contractionWord
            }
        });
        return (this.wordArray.join(" "))
    }
}


const contraction = new Contractions()
module.exports = contraction
