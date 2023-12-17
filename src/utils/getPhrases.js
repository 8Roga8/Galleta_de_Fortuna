const getPhrases = array => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

export default getPhrases