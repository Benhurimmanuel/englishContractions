
const contractionsList = new Map([
    ["aren't", ["are not"]],
    ["there's", ["there is", "there has"]],
    ["can't", ["can not"]],
    ["they'd", ["they had", "they would"]],
    ["couldn't", ["could not"]],
    ["they'll", ["they will", "they shall"]],
    ["didn't", ["did not"]],
    ["they're", ["they are"]],
    ["doesn't", ["does not"]],
    ["they've", ["they have"]],
    ["don't", ["do not"]],
    ["we'd", ["we had", "we would"]],
    ["hadn't", ["had not"]],
    ["we're", ["we are"]],
    ["hasn't", ["has not"]],
    ["we've", ["we have"]],
    ["haven't", ["have not"]],
    ["weren't", ["were not"]],
    ["he'd", ["he had", "he would"]],
    ["what'll", ["what will", "what shall"]],
    ["he'll", ["he will", "he shall"]],
    ["what're", ["what are"]],
    ["he's", ["he is", "he has"]],
    ["what's", ["what is", "what has"]],
    ["i'd", ["I had", "I would"]],
    ["what've", ["what have"]],
    ["i'll", ["I will", "I shall"]],
    ["where's", ["where is", "where has"]],
    ["i'm", ["I am"]],
    ["who'd", ["who had", "who would"]],
    ["i've", ["I have"]],
    ["who'll", ["who will", "who shall"]],
    ["isn't", ["is not"]],
    ["who're", ["who are"]],
    ["let's", ["let us"]],
    ["who's", ["who is, who has"]],
    ["mightn't", ["might not"]],
    ["who've", ["who have"]],
    ["mustn't", ["must not"]],
    ["won't", ["will not"]],
    ["shan't", ["shall not",]],
    ["wouldn't", ["would not"]],
    ["she'd", ["she had", "she would"]],
    ["you'd", ["you had", "you would"]],
    ["she'll", ["she will", "she shall"]],
    ["you'll", ["you will", "you shall"]],
    ["she's", ["she is", "she has"]],
    ["you're", ["you are"]],
    ["shouldn't", ["should not"]],
    ["you've", ["you have"]],
    ["that's", ["that is", "that has"]],
    ["y'all", ["you all"]]
]
)

class Contractions {
    constructor(sentence) {
        this.wordArray = sentence.toLowerCase().split(" ")
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
    applyContraction = () => {
        this.wordArray.forEach((element, index) => {
            const contractionWord = this.getContraction(element)
            if (contractionWord) {
                this.wordArray[index] = contractionWord
            }
        });
        return (this.wordArray.join(" "))
    }

}
module.exports = Contractions
